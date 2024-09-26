import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
const AddTransactionPopUp = ({ handleClosePopUp, handleSubmit, addtpopup, setaddtpopup, tType, tDescriptions, tAmount, tDate }) => {

    return (
        <div className="">
            <Dialog open={addtpopup} className="" maxWidth="md" width="500px">
                <div className="dialogcomp bg-transparent">
                <DialogTitle className="text-light d-flex justify-content-between align-items-center">Add Transaction <AiOutlineClose onClick={handleClosePopUp} /></DialogTitle>
                <DialogContent>

                    <Form onSubmit={handleSubmit} className="">
                        <FloatingLabel label="Transaction Type *" className="popcont bg-transparent text-light">
                            <Form.Select required={true} ref={tType} className="popcont bg-transparent text-light" aria-label="Default select example">
                                <option className="bg-primary bg-gradient-primary text-light" value="">Select Transaction Type</option>
                                <option className="bg-primary bg-gradient text-light" value="income">Income</option>
                                <option className="bg-primary bg-gradient text-light" value="expense">Expense</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Transaction Description *" className="mb-2 mt-2 text-light popcont">
                            <Form.Control required ref={tDescriptions} className="bg-transparent text-light popcont" type="text" placeholder="ex:travel,salary,food" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Transaction Amount *" className="text-light">
                            <Form.Control required ref={tAmount} className="popcont bg-transparent text-light" type="number" placeholder="Transaction Amount" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Date of Transacton" className="mt-2  text-light popcont">
                            <Form.Control ref={tDate} type="date" className="popcont bg-transparent text-light" placeholder="Enter date or current system date will bw taken as default" />
                        </FloatingLabel>

                       
                        <div className="formbtns d-flex justify-content-evenly mt-2">
                            <Button variant="" type="submit" className="btn-outline-success "><b>Submit</b></Button>
                            <Button variant="" type="cancel" onClick={handleClosePopUp} className="btn-outline-danger"><b>cancel</b></Button>
                        </div>
                    </Form>
                </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}

export default AddTransactionPopUp;