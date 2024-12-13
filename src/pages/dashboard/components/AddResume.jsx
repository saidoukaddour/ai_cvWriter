import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/clerk-react";
import GlobalApi from '../../../../service/GlobalApi'


function AddResume() {

  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const {user} = useUser();
  const [loading,setloading]=useState(false);

  const handleResumeTitle = () => {
    setloading(true)
    const uuid = uuidv4();
    const data = {
        data:{
            title: resumeTitle,
            resumeId : uuid,
            userEmail: user.primaryEmailAddress?.emailAddress,
            userName : user?.fullName
        }
    }
    GlobalApi.CreateNewResume(data).then(resp=>{
        console.log(resp)
        if(resp){
            setloading(false)
        }
    },(error)=>{
        setloading(false);
    })
    
  }

  return (
    <div>
      <div
        className="p-14 py24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] 
      hover:scale-105  transition-all duration-300 cursor-pointer hover:shadow-md border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new resume</DialogTitle>
            <DialogDescription>
              <p>Enter the name of your resume</p>
              <Input placeholder="Ex. john resume" className="my-2"
              onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-2">
                <Button className="mr-2" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button disabled={!resumeTitle || loading}
                 className="bg-primary text-white"
                onClick={()=>handleResumeTitle()}>
                
                    {loading ? <Loader2 className="animate-spin"/>: 'Continue' }
                    </Button>   
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
