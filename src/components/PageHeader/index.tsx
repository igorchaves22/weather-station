import { renderElementIfTrue } from "~utils";
import { Icon } from "../Icon";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import { OverlayModal } from "../OverlayModal";
import { ToggleThemeButton } from "../ToggleThemeButton";
import { useController } from "./useController";
import "./styles.scss";

export const PageHeader = () => {
    const { isScreen, navbarIsRendered, toggleNavbarRender } = useController();

    return (
        <header className="page-header">
            <Logo />
            {renderElementIfTrue(isScreen.desktop, <Navbar />)}
            <section className="page-header__box page-header__box--button">
                <ToggleThemeButton />
                {renderElementIfTrue(
                    isScreen.mobile,
                    <button
                        type="button"
                        aria-label="Show modal"
                        onClick={() => toggleNavbarRender(true)}
                        className="page-header__button"
                    >
                        <Icon
                            icon="List"
                            weight="bold"
                            size="lg"
                        />
                    </button>
                )}
            </section>
            <OverlayModal isRendered={navbarIsRendered}>
                <section
                    className={`page-header__box page-header__box--modal page-header__box--${navbarIsRendered.immediate ? "show" : "hide"}`}
                >
                    <button
                        type="button"
                        aria-label="Hide modal"
                        onClick={() => toggleNavbarRender(false)}
                        className="page-header__button"
                    >
                        <Icon
                            icon="X"
                            weight="bold"
                            size="lg"
                        />
                    </button>
                    <div className="page-header__divider" />
                    <Navbar callback={() => toggleNavbarRender(false)} />
                </section>
            </OverlayModal>
        </header>
    );
};
