import * as Dialog from '@nextui-org/react';

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
  }
  
  const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
  }) => {
    return ( 
      <Dialog.Modal
        isOpen={isOpen}
        defaultOpen={isOpen}
        onOpenChange={onChange}
        classNames={{
          body: "py-6",
          backdrop: "",
          header: "border-b-[1px] border-[#292F46]",
          footer: "border-t-[1px] border-[#292F46]",
          base: "bg-darkgray text-mattewhite border-[#292F46]",        
        }}       
      >       
        <Dialog.ModalContent>
          {(onClose) => (
            <>
              <Dialog.ModalHeader>
                {title}                
              </Dialog.ModalHeader>                
              <Dialog.ModalBody>
                {description}                
                {children}              
              </Dialog.ModalBody>
              <Dialog.ModalFooter>
                <Dialog.Button
                  color="danger"
                  variant="light"
                  onPress={onClose}                                  
                >    
                Close            
                </Dialog.Button>
              </Dialog.ModalFooter>
            </>
          )}          
          </Dialog.ModalContent>
      </Dialog.Modal>
  );
}

export default Modal;