import { useParams, Link } from "react-router-dom";
import { coursesBySlug } from "@/data/courses";
import { CoursePage } from "@/components/course/CoursePage";

export default function PremiumCoursePage() {
  const { slug } = useParams();
  const course = coursesBySlug[slug?.toLowerCase()];

  if (!course) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-50">
        <div className="text-center max-w-md px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ea580c]">Course not found</p>
          <h1 className="mt-2 text-3xl font-display font-bold text-slate-800">We couldn't find that course</h1>
          <p className="mt-3 text-muted-foreground">Choose a program from our courses menu to continue.</p>
          <Link to="/courses" className="mt-6 inline-flex btn-primary">
            All Courses
          </Link>
        </div>
      </main>
    );
  }

  return <CoursePage key={slug} course={course} />;
}
