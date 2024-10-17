import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"
import { CardHeader } from "@/components/CardHeader"
export const EducationSection = () => {
    return (
    <section className="py-20  lg:py-28  ">

        <div className="container ">

            <SectionHeader eyebrow="Education & Experience" description="Take a view of the education and experience that shaped me " />
            <div className="flex-row ">
                <div className="my-3"><Card>
                    <CardHeader title="Education" description="Tertiary & Secondary Education" />
                    <div className="grid gap-6 relative md:grid-cols-2 mx-3 mb-3">
                    <div className="  card md:border-r md:border-gray-200 md:pr-6 ">
                    <div className="group hover:animate-bounce [animation-duration:3s] flex">
                    <div className="description mx-3">
                        <p>Institution:</p>
                        <p>Qualification:</p> 
                        <p>Duration:</p> 
                        </div>
                        <div className="detail">

                        <h1>Life Choices Academy</h1>
                        <h1>Full Stack Developer</h1>
                        <h1>2023-2024</h1>
                        </div>
                    </div>
                       
                        
                    </div>
                    <div className="card  ">
                        <div className="group hover:animate-bounce [animation-duration:3s] flex">

                        <div className="description mx-3">
                        <p>Institution:</p>
                        <p>Qualification:</p> 
                        <p>Duration:</p> 
                        </div>
                        <div className="detail">

                        <h1>Falsebay College Westlake Campus</h1>
                        <h1>N3 Electrical Engineering</h1>
                        <h1>2018-2019</h1>
                        </div>
                        </div>
                        
                    </div>
                    <div className="card  ">
                     <div className="group hover:animate-bounce [animation-duration:3s] flex">
                        <div className="description mx-3">
                        <p>Institution:</p>
                        <p>Qualification:</p> 
                        <p>Duration:</p> 
                        </div>
                        <div className="detail">

                        <h1>Crestway High School</h1>
                        <h1>Grade 12</h1>
                        <p>2016</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </Card></div>
                <div>
                    <Card>
                        <CardHeader title="Work experience" description="practical experiences" />
                        <div className="grid gap-6 relative md:grid-cols-2 mx-3 mb-3">
                    <div className="  card md:border-r md:border-gray-200 md:pr-6 ">
                    <div className="group hover:animate-bounce [animation-duration:3s] flex">
                    <div className="description mx-3">
                        <p>Company:</p>
                        <p>Position:</p> 
                        <p>Duration:</p> 
                        </div>
                        <div className="detail">

                        <h1>LC Studio</h1>
                        <h1>Technical Intern</h1>
                        <h1>2024-present</h1>
                        </div>
                    </div>
                       
                        
                    </div>
                    <div className="card  ">
                        <div className="group hover:animate-bounce [animation-duration:3s] flex">

                        <div className="description mx-3">
                        <p>Company:</p>
                        <p>Position:</p> 
                        <p>Duration:</p> 
                        </div>
                        <div className="detail">

                        <h1>City Of Cape Town</h1>
                        <h1>Electrical Apprentice</h1>
                        <h1>2019-2023</h1>
                        </div>
                        </div>
                        
                    </div>
                    <div className="card  ">
                     <div className="group hover:animate-bounce [animation-duration:3s] flex">
                        <div className="description mx-3">
                        <p>Company:</p>
                        <p>Position:</p> 
                        <p>Duration:</p> 
                        </div>
                        <div className="detail">

                        <h1>Pyrotec Packmedia</h1>
                        <h1>Picker & Packer</h1>
                        <p>2017(3 months)</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Card>
                </div>
            </div>

        </div>
    </section>
    )
}