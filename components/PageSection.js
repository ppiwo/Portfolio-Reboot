import SectionHeader from "components/SectionHeader";

export default function PageSection({ header, subheader, children, textContent }) {
    return (
        <section>
            <SectionHeader header={header} subheader={subheader}/>
            {children}
            <p>{textContent}</p>
        </section>
    )
}
