import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useInjection } from "../../../../../ioc.react"
import Document from "../../../../../data/models/document";
import { DocumentService } from "../../../../../services/panel/user/document_service"







const DocumentList = () => {


    const [docs, setDocs] = useState<Document[]>()


    useEffect(() => {
        load_documents()
    }, [])


    const document_service = useInjection(DocumentService);


    const load_documents = () => {

        // const decoded = useJwt<string>(localStorage.getItem("token") || "");

        document_service.getDocuments("3")
            .then(response => {
                setDocs(response);
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="alert alert-warning" style={{ fontSize: "12px" }}>
                        <h5 style={{ display: "flex", backgroundColor: "Highlight", justifyContent: "center" }}>توجه!</h5>
                        <p><strong><i className="fa fa-check" /> </strong>لطفا تصویر واقعی از  روی کارت ملی خود تهیه و ارسال نمایید.
                        </p>
                        <p><strong><i className="fa fa-check" /> </strong>حداقل سن برای دریافت نشان تجاری 18 سال تمام میباشد
                        </p>
                        <p> <strong><i className="fa fa-check" /> </strong>استفاده از مدارک سایرین و مدارک والدین مجاز نمیباشد و در صورت مشاهده حساب مسدود میگردد.
                        </p>
                        <p><strong><i className="fa fa-check" /> </strong>در صورت استفاده از مدارک دیگران حساب کاربران مسدود میگردد.
                        </p>
                        <p><strong><i className="fa fa-check" /> </strong>در صورت جعل اسناد هویتی و هرگونه دستکاری در آنها فرد مذکور به مراجع قضایی معرفی میگردد.
                        </p>
                        <p><strong><i className="fa fa-check" /> </strong>مجازات جعل اسناد طبق قانون 530 قانون تعزیرات 2 ماه تا 2 سال حبس به همراه مجازات نقدی میباشد.
                        </p>
                    </div>
                </div>

            </div>


            <div className="card">
                <div className="card-header">آرشیو مدارک</div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>وضعیت</th>
                                <th>پاسخ</th>
                                <th>تصویر ارسالی</th>
                                <th>نوع حساب</th>
                                <th>نام</th>
                                <th>تاریخ درخواست</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                docs?.map(el => {
                                    return (
                                        <tr>
                                            {el.approve == 0 && <td>"0"</td>}
                                            {el.approve == 1 && <td>"1"</td>}
                                            {el.approve == 2 && <td>"2"</td>}

                                            {<td>{el.message}</td>}

                                            {<td>{el.photoUrl}</td>}

                                            {el.isTrue ? <td>"hagigi"</td> : <td>"hogogi"</td>}

                                            {<td>{el.name}</td>}

                                            {<td>{el.dateCreated}</td>}
                                        </tr>

                                    )

                                })

                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default DocumentList;