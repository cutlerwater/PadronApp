import { Container, Section } from "../../global";
import {
    SponsorContainer,
    SponsorImage,
} from "./styledSponsor";
import Fade from 'react-reveal/Fade';

export const Sponsor = () => {
    return (
        <Section>
            <Container>
                <Fade down>
                    <SponsorContainer>
                        <SponsorImage src="/img/holts.png" alt="holts" />
                        <SponsorImage src="/img/davidus.png" alt="davidus" />
                        <SponsorImage src="/img/logo.jpg" alt="padron" />
                        <SponsorImage src="/img/cigarbid.svg" alt="cigarbid" />
                    </SponsorContainer>
                </Fade>
            </Container>
        </Section>
    );
};