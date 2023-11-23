'use client'
import { AboutMe } from "./AboutMe"
import { MainStyled } from "./style"

export const Main = () => {

    return (
        <>
            <MainStyled>
                <div className="void"></div>
                <section>
                    <AboutMe/>
                </section>
            </MainStyled>
        </>
    )
}