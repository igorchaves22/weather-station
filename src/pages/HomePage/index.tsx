import { PageFooter, PageHeader, PageMain } from "~components";
import "./styles.scss";

export const HomePage = () => (
    <section className="home-page">
        <PageHeader />
        <PageMain />
        <PageFooter />
    </section>
);
