// export default function Toolbar() {
//   const { state } = useSidebar(); // <--- safe here, because inside SidebarProvider

//   return (
//     <div className="flex justify-start mb-4">
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <SidebarTrigger asChild>
//             <button className="p-2 rounded-md hover:bg-slate-200 transition">
//               <img
//                 src={state === "collapsed" ? panelRight : panelLeft}
//                 alt="Toggle Sidebar"
//                 className="size-5"
//               />
//             </button>
//           </SidebarTrigger>
//         </TooltipTrigger>

//         <TooltipContent side="bottom">
//           <p>{state === "collapsed" ? "Show sidebar" : "Hide sidebar"}</p>
//         </TooltipContent>
//       </Tooltip>
//     </div>
//   );
// }
