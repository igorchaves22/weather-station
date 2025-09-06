import { memo } from "react";
import { applyClassNameIfTrue, SECTIONS } from "~utils";
import type { INavbar } from "./types";
import { useController } from "./useController";
import "./styles.scss";

export const Navbar = memo(function Navbar({ callback }: INavbar) {
    const { currentSection, handleClick } = useController();

    return (
        <nav className="navbar">
            <ul className="navbar__box navbar__box--list">
                {SECTIONS.map((item) => (
                    <li
                        key={item}
                        className="navbar__box navbar__box--item"
                    >
                        <button
                            type="button"
                            onClick={() => handleClick(item, callback)}
                            className={
                                "navbar__btn" + applyClassNameIfTrue(currentSection === item, "navbar__btn--selected")
                            }
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
});
