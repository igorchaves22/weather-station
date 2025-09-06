import { Icon } from "../Icon";
import { Logo } from "../Logo";
import { SOCIALS, SOURCE } from "./constants";
import "./styles.scss";

export const PageFooter = () => (
    <footer className="page-footer">
        <section className="page-footer__box page-footer__box--main">
            <Logo />
            <a
                href={SOURCE.href}
                target="_blank"
                rel="noopener noreferrer"
                className="page-footer__link page-footer__link--source"
            >
                <Icon
                    icon={SOURCE.icon}
                    weight="bold"
                    size="sm"
                />
                <strong className="page-footer__text page-footer__text--source">Source</strong>
            </a>
            <p className="page-footer__text">
                Made by{" "}
                <a
                    href={SOCIALS[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="page-footer__link page-footer__link--author"
                >
                    Igor
                </a>
            </p>
            <ul className="page-footer__box page-footer__box--list">
                {SOCIALS.map((item) => (
                    <li
                        key={item.href}
                        className="page-footer__box page-footer__box--item"
                    >
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="page-footer__link"
                        >
                            <Icon
                                icon={item.icon}
                                size="sm"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
        <small className="page-footer__text page-footer__text--copyright">© 2025 Weather Station</small>
    </footer>
);
