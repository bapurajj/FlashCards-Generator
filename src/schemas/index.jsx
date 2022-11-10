import * as Yup from "yup"; 

export const formSchema = Yup.object({
    groupname: Yup.string().min(3).required("*Please enter your group name"),
    description: Yup.string().min(25).required("*Please enter description"),
    term: Yup.string().min(6).required("*Please enter your term name"),
    defination: Yup.string().min(25).required("*Please enter defination"),
});