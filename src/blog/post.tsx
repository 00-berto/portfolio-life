import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import Markdown from "react-markdown";
import * as React from "react";

export default function BlogPost() {
    const { postId } = useParams();
    const [postContent, setPostContent] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            if (!postId) {
                setPostContent("No post found.");
                return;
            }
            try {
                const response = await fetch(`/blog/${postId}.md`);
                if (!response.ok) {
                    setPostContent("# no post found.\ncouldn't find this post.");
                    return;
                }
                const contentType = response.headers.get("Content-Type");
                if (!contentType?.includes("text/markdown")) {
                    setPostContent("# no post found.\ncouldn't find this post.");
                    return;
                }
                const content = await response.text();
                setPostContent(content);
            } catch {
                setPostContent("# error loading post.\ntry again later.");
            }
        };
        fetchMarkdown().then();
    }, [postId]);

    const components = {
        a: ({ href, children }: { href?: string, children?: React.ReactNode }) => (
            <Link to={href!} className="text-[#33A1E0] hover:text-[#2A7DAC] transition-all ease-out duration-75 underline">
                {children}
            </Link>
        ),
        h1: ({ children }: { children?: React.ReactNode }) => <h1 className="text-2xl font-bold">{children}</h1>,
        h2: ({ children }: { children?: React.ReactNode }) => <h2 className="text-xl font-semibold">{children}</h2>,
        h3: ({ children }: { children?: React.ReactNode }) => <h3 className="text-lg font-medium">{children}</h3>,
    };

    return (
        <div className={"min-h-screen min-w-screen flex"}>
            <div className={"font-mono tracking-tighter p-5 flex flex-col gap-3"}>
                <Link to={"/blog"} className="text-lg font-black text-[#33A1E0] flex flex-row gap-1 items-center hover:text-[#2A7DAC] transition-all ease-out duration-75">
                    <ChevronLeftIcon className={"size-6 stroke-3"}/>
                    go back
                </Link>
                <Markdown components={components}>{postContent}</Markdown>
            </div>
        </div>
    );
}