import type { Metadata } from "next";
import { resumes, type ResumeId } from "@/lib/data";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Harshvardhan Singh Jadon",
  description:
    "View and download Harshvardhan Singh Jadon's resume — DevOps & Platform, AWS, Azure, Platform, Cloud, and SRE versions.",
  alternates: {
    canonical: "https://jadonharsh.in/resume",
  },
};

export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ domain?: string; pages?: string }>;
}) {
  const { domain, pages } = await searchParams;
  const initialId = (resumes.find((r) => r.id === domain)?.id ??
    "master") as ResumeId;

  return <ResumeViewer initialId={initialId} initialOnePage={pages === "1"} />;
}
