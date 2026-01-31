import { Hero } from '../Hero'
import { Services } from '../Services'
import { Skills } from '../Skills'
import { ProjectsList } from '../ProjectsList'
import { Contact } from '../Contact'
import { BoxArrowUp } from './BoxArroeUp'

export const Main = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
                    <Skills />
            <ProjectsList />
            <Contact />
                <BoxArrowUp />
            </main>
    )
}
