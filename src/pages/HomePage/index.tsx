import { PageFooter, PageHeader, PageMain } from "~components";
import { ViewportContextProvider } from "~contexts";
import { QueryContextProvider, SectionContextProvider } from "~contexts";
import "./styles.scss";

export const HomePage = () => (
    <ViewportContextProvider>
        <section className="home-page">
            <SectionContextProvider>
                <PageHeader />
                <QueryContextProvider>
                    <PageMain />
                </QueryContextProvider>
            </SectionContextProvider>
            <PageFooter />
        </section>
    </ViewportContextProvider>
);
