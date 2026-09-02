import { locations } from "#constants"
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/dist/Draggable"
import { useWindowStore } from "../store/window"; 

const projects = locations.work?.children ?? [];

const Home = () => {
  // FIX: Destructure only what is available in your store
  // If setActiveLocation causes an error, it's because it's not defined in your Zustand store.
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    // FIX: Pass the project data directly as the second argument.
    // This sets the 'data' for the 'finder' window in your store
    openWindow("finder", project);
  }

  useGSAP(() => {
    Draggable.create(".folder"); 
  }, []);

  return (
    <section id="home">
      <ul>
        {
          projects.map((project) => (
            <li 
              key={project.id} 
              className={clsx("group folder", project.windowPosition)} 
              onClick={() => handleOpenProjectFinder(project)}
            >
              <img src="/images/folder.png" alt={project.name} className="size-16" />
              <p>{project.name}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Home