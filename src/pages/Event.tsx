import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Popover, Transition } from "@headlessui/react";



export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <Popover className="relative">
            {({ open }) => (
                <div className="flex flex-col min-h-screen">
                    <Header open={open} />
                    <main className="flex flex-1">
                        {slug
                            ? <Video lessonSlug={slug} />
                            : <div className=" flex-1" />
                        }
                        <Popover.Panel className="absolute z-1000">
                            <Sidebar />
                        </Popover.Panel>
                        <div className="hidden md:block">
                            <Sidebar />
                        </div>
                    </main>
                </div>
            )}
        </Popover>
    )
}