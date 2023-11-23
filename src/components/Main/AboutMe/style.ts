import styled from "styled-components";


export const AboutMeStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 3rem;
    padding-top: 7rem;

    .image_profile {
        .image {
                width: 22.5rem;
                height: 27.1875rem;
            }
    }

    .description_profile {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .paragh_intro {
            font-size: 3rem;
            
            .name {
                color: var(--color-gree2);
            }

            .profession {
                font-weight: 600;
                color: var(--color-primary);
                text-decoration: underline;
            }

            
        }
        .point {
            color: var(--color-gree2);
            font-size: 4rem;

            &.two {
                font-size: 2.3rem;
            }
        }

        .training {
            font-size: 1.3rem;

            .profession_training {
                color: var(--color-primary);
                text-decoration: underline;
            }
        }
    }
`