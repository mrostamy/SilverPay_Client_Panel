
const BankCard = () => {
    return (
        <div className="tab-pane" id="bankcard">
            <div className="alert alert-info">
                <h6>توجه!</h6>
                <p>الزاما باید حساب بانکی شخصی که مدارک ایشان ارسال شده ثبت شود </p>
            </div>
            <div className="alert alert-warning">
                <h6>هشدار!</h6>
                <p>هیچ گونه مسئولیتی را در قبال واریز  وجه به حساب دیگران را نمیپذبرد </p>
            </div>
            <form role="form">
                <div className="form-group">
                    <label htmlFor="bankname">نام بانک</label>
                    <input
                        type="text"
                        className="form-control"
                        id="bankname"
                        name="bankname"
                        placeholder="نام بانک را وارد نمایید"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cardowner">نام صاحب کارت</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cardowner"
                        name="cardowner"
                        placeholder="نام صاحب کارت بانکی را وارد نمایید"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="shaba">شماره شبا</label>
                    <input
                        type="text"
                        className="form-control"
                        id="shaba"
                        name="shaba"
                        placeholder="شماره شبای خود را  وارد نمایید"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountnumber">شماره حساب</label>
                    <input
                        type="text"
                        className="form-control"
                        id="accountnumber"
                        name="accountnumber"
                        placeholder="شماره حساب  خود را  وارد نمایید"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    ارسال
                </button>
            </form>
        </div>
    )
}

export default BankCard;