import { QueryClientProvider } from "@tanstack/react-query";
import { renderElementIfTrue } from "~utils";
import { QueryForm } from "../QueryForm";
import { StatusMessage } from "../StatusMessage";
import { queryClient, SECTION } from "./constants";
import { useController } from "./useController";
import "./styles.scss";

export const PageMain = () => {
    const { currentSection, hasQuery, noteIsRendered } = useController();

    return (
        <main className="page-main">
            <QueryForm />
            <section className="page-main__box page-main__box--main">
                <StatusMessage
                    isRendered={noteIsRendered}
                    status="warning"
                    text="In this section, data is displayed only using coordinates."
                />
                <section className="page-main__box page-main__box--content">
                    <QueryClientProvider client={queryClient}>
                        {renderElementIfTrue(
                            hasQuery,
                            SECTION[currentSection],
                            <section className="page-main__box page-main__box--empty">
                                <h2 className="page-main__text page-main__text--title">No Search Performed</h2>
                                <p className="page-main__text page-main__text--description">
                                    Use the form above to search by city name or geographic coordinates. Once you do,
                                    we'll display the corresponding weather information here.
                                </p>
                            </section>
                        )}
                    </QueryClientProvider>
                </section>
            </section>
        </main>
    );
};
