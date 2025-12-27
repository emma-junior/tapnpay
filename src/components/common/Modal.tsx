interface modalProps {
  children: React.ReactNode;
  showModal: boolean;
}

const Modal = ({ children, showModal }: modalProps) => {
  if (!showModal) return null;
  return (
    <div
      className={`
            fixed h-screen xl:h-[98.5vh] w-full xl:w-[30%] mx-auto inset-0 flex justify-center items-end transition-colors z-20
            ${showModal ? "visible bg-black/50" : "invisible"}
        `}
    >
      {children}
    </div>
  );
};

export default Modal;
