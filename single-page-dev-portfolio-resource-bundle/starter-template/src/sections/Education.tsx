import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"
import { CardHeader } from "@/components/CardHeader"
export const EducationSection = () => {
    return (
        <div className="container py-6">

            <SectionHeader eyebrow="Education & Experience" description="Take a view of the education and experience that shaped me " />
            <div className="flex-row ">
                <div className="my-3"><Card>
                    <CardHeader title="Education" description="Secondary & Tertiary Education" />
                </Card></div>
                <div>
                    <Card>
                        <CardHeader title="Work experience" description="practical experiences" />
                    </Card>
                </div>
            </div>

        </div>
    )
}