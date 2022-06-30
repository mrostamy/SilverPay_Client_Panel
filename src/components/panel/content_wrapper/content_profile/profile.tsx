
import user4 from "../../../../assets/images/user4-128x128.jpg";
import user1 from "../../../../assets/images/user1-128x128.jpg";
import user3 from "../../../../assets/images/user3-128x128.jpg";
import user6 from "../../../../assets/images/user6-128x128.jpg";
import photo1 from "../../../../assets/images/photo1.png";
import photo2 from "../../../../assets/images/photo2.png";
import photo3 from "../../../../assets/images/photo3.jpg";
import photo4 from "../../../../assets/images/photo4.jpg";


const ContentProfile = () => {
    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        {/* Profile Image */}
                        <div className="card card-primary card-outline">
                            <div className="card-body box-profile">
                                <div className="text-center">
                                    <img
                                        className="profile-user-img img-fluid img-circle"
                                        src={user4}
                                        alt="User profile picture"
                                    />
                                </div>
                                <h3 className="profile-username text-center">فاطمه برهمند</h3>
                                <p className="text-muted text-center">مهندس نرم افزار</p>
                                <ul className="list-group list-group-unbordered mb-3">
                                    <li className="list-group-item">
                                        <b>دنبال شونده</b> <a className="float-right">1,322</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>دنبال کننده</b> <a className="float-right">543</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>دوستان</b> <a className="float-right">13,287</a>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary btn-block">
                                    <b>دنبال کردن</b>
                                </a>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                        {/* About Me Box */}
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">درباره من</h3>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <strong>
                                    <i className="fa fa-book mr-1" /> تحصیلات
                                </strong>
                                <p className="text-muted">لیسانس نرم افزار کامپیوتر</p>
                                <hr />
                                <strong>
                                    <i className="fa fa-map-marker mr-1" /> موقعیت
                                </strong>
                                <p className="text-muted">ایران، مازندران</p>
                                <hr />
                                <strong>
                                    <i className="fa fa-pencil mr-1" /> مهارت‌ها
                                </strong>
                                <p className="text-muted">
                                    <span className="badge badge-danger">UI Design</span>
                                    <span className="badge badge-success">Coding</span>
                                    <span className="badge badge-info">Javascript</span>
                                    <span className="badge badge-warning">PHP</span>
                                    <span className="badge badge-primary">Node.js</span>
                                </p>
                                <hr />
                                <strong>
                                    <i className="fa fa-file-text-o mr-1" /> یادداشت
                                </strong>
                                <p className="text-muted">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده از طراحان گرافیک است.
                                </p>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header p-2">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#activity"
                                            data-toggle="tab"
                                        >
                                            فعالیت‌ها
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#timeline" data-toggle="tab">
                                            تایم لاین
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#settings" data-toggle="tab">
                                            تنظیمات
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="active tab-pane" id="activity">
                                        {/* Post */}
                                        <div className="post">
                                            <div className="user-block">
                                                <img
                                                    className="img-circle img-bordered-sm"
                                                    src={user1}
                                                    alt="user image"
                                                />
                                                <span className="username">
                                                    <a href="#">حسام موسوی</a>
                                                    <a href="#" className="float-left btn-tool">
                                                        <i className="fa fa-times" />
                                                    </a>
                                                </span>
                                                <span className="description">
                                                    ارسال شده در 25 آذر 1397
                                                </span>
                                            </div>
                                            {/* /.user-block */}
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                                                و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                                کاربردی می باشد.
                                            </p>
                                            <p>
                                                <a href="#" className="link-black text-sm mr-2">
                                                    <i className="fa fa-share mr-1" /> اشتراک گذاری
                                                </a>
                                                <a href="#" className="link-black text-sm">
                                                    <i className="fa fa-thumbs-o-up mr-1" /> لایک
                                                </a>
                                                <span className="float-left">
                                                    <a href="#" className="link-black text-sm">
                                                        <i className="fa fa-comments-o mr-1" /> نظر (5)
                                                    </a>
                                                </span>
                                            </p>
                                            <input
                                                className="form-control form-control-sm"
                                                type="text"
                                                placeholder="نظر خود را وارد کنید"
                                            />
                                        </div>
                                        {/* /.post */}
                                        {/* Post */}
                                        <div className="post clearfix">
                                            <div className="user-block">
                                                <img
                                                    className="img-circle img-bordered-sm"
                                                    src={user3}
                                                    alt="User Image"
                                                />
                                                <span className="username">
                                                    <a href="#">نینا الکس</a>
                                                    <a href="#" className="float-left btn-tool">
                                                        <i className="fa fa-times" />
                                                    </a>
                                                </span>
                                                <span className="description">ارسال شده - 3 روز پیش</span>
                                            </div>
                                            {/* /.user-block */}
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                                                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                                                و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                                کاربردی می باشد.
                                            </p>
                                            <form className="form-horizontal">
                                                <div className="input-group input-group-sm mb-0">
                                                    <input
                                                        className="form-control form-control-sm"
                                                        placeholder="نظر خود را تایپ کنید"
                                                    />
                                                    <div className="input-group-append">
                                                        <button type="submit" className="btn btn-danger">
                                                            ارسال
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.post */}
                                        {/* Post */}
                                        <div className="post">
                                            <div className="user-block">
                                                <img
                                                    className="img-circle img-bordered-sm"
                                                    src={user6}
                                                    alt="User Image"
                                                />
                                                <span className="username">
                                                    <a href="#">محمد محمدی</a>
                                                    <a href="#" className="float-left btn-tool">
                                                        <i className="fa fa-times" />
                                                    </a>
                                                </span>
                                                <span className="description">ارسال شده - 5 روز پیش</span>
                                            </div>
                                            {/* /.user-block */}
                                            <div className="row mb-3">
                                                <div className="col-sm-6">
                                                    <img
                                                        className="img-fluid"
                                                        src={photo1}
                                                        alt="Photo"
                                                    />
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-6">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <img
                                                                className="img-fluid mb-3"
                                                                src={photo2}
                                                                alt="Photo"
                                                            />
                                                            <img
                                                                className="img-fluid"
                                                                src={photo3}
                                                                alt="Photo"
                                                            />
                                                        </div>
                                                        {/* /.col */}
                                                        <div className="col-sm-6">
                                                            <img
                                                                className="img-fluid mb-3"
                                                                src={photo4}
                                                                alt="Photo"
                                                            />
                                                            <img
                                                                className="img-fluid"
                                                                src={photo1}
                                                                alt="Photo"
                                                            />
                                                        </div>
                                                        {/* /.col */}
                                                    </div>
                                                    {/* /.row */}
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                            <p>
                                                <a href="#" className="link-black text-sm mr-2">
                                                    <i className="fa fa-share mr-1" /> اشتراک گذاری
                                                </a>
                                                <a href="#" className="link-black text-sm">
                                                    <i className="fa fa-thumbs-o-up mr-1" /> لایک
                                                </a>
                                                <span className="float-left">
                                                    <a href="#" className="link-black text-sm">
                                                        <i className="fa fa-comments-o mr-1" /> نظر (5)
                                                    </a>
                                                </span>
                                            </p>
                                            <input
                                                className="form-control form-control-sm"
                                                type="text"
                                                placeholder="نظر خود را تایپ کنید"
                                            />
                                        </div>
                                        {/* /.post */}
                                    </div>
                                    {/* /.tab-pane */}
                                    <div className="tab-pane" id="timeline">
                                        {/* The timeline */}
                                        <ul className="timeline timeline-inverse">
                                            {/* timeline time label */}
                                            <li className="time-label">
                                                <span className="bg-danger">10 Feb. 2014</span>
                                            </li>
                                            {/* /.timeline-label */}
                                            {/* timeline item */}
                                            <li>
                                                <i className="fa fa-envelope bg-primary" />
                                                <div className="timeline-item">
                                                    <span className="time">
                                                        <i className="fa fa-clock-o" /> 12:05
                                                    </span>
                                                    <h3 className="timeline-header">
                                                        <a href="#">Support Team</a> sent you an email
                                                    </h3>
                                                    <div className="timeline-body">
                                                        Etsy doostang zoodles disqus groupon greplin oooj voxy
                                                        zoodles, weebly ning heekya handango imeem plugg dopplr
                                                        jibjab, movity jajah plickers sifteo edmodo ifttt
                                                        zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu
                                                        weebly balihoo...
                                                    </div>
                                                    <div className="timeline-footer">
                                                        <a href="#" className="btn btn-primary btn-sm">
                                                            Read more
                                                        </a>
                                                        <a href="#" className="btn btn-danger btn-sm">
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            {/* timeline item */}
                                            <li>
                                                <i className="fa fa-user bg-info" />
                                                <div className="timeline-item">
                                                    <span className="time">
                                                        <i className="fa fa-clock-o" /> 5 mins ago
                                                    </span>
                                                    <h3 className="timeline-header no-border">
                                                        <a href="#">Sarah Young</a> accepted your friend request
                                                    </h3>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            {/* timeline item */}
                                            <li>
                                                <i className="fa fa-comments bg-warning" />
                                                <div className="timeline-item">
                                                    <span className="time">
                                                        <i className="fa fa-clock-o" /> 27 mins ago
                                                    </span>
                                                    <h3 className="timeline-header">
                                                        <a href="#">Jay White</a> commented on your post
                                                    </h3>
                                                    <div className="timeline-body">
                                                        Take me to your leader! Switzerland is small and
                                                        neutral! We are more like Germany, ambitious and
                                                        misunderstood!
                                                    </div>
                                                    <div className="timeline-footer">
                                                        <a href="#" className="btn btn-warning btn-flat btn-sm">
                                                            View comment
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            {/* timeline time label */}
                                            <li className="time-label">
                                                <span className="bg-success">3 Jan. 2014</span>
                                            </li>
                                            {/* /.timeline-label */}
                                            {/* timeline item */}
                                            <li>
                                                <i className="fa fa-camera bg-purple" />
                                                <div className="timeline-item">
                                                    <span className="time">
                                                        <i className="fa fa-clock-o" /> 2 days ago
                                                    </span>
                                                    <h3 className="timeline-header">
                                                        <a href="#">Mina Lee</a> uploaded new photos
                                                    </h3>
                                                    <div className="timeline-body">
                                                        <img
                                                            src="http://placehold.it/150x100"
                                                            alt="..."
                                                            className="margin"
                                                        />
                                                        <img
                                                            src="http://placehold.it/150x100"
                                                            alt="..."
                                                            className="margin"
                                                        />
                                                        <img
                                                            src="http://placehold.it/150x100"
                                                            alt="..."
                                                            className="margin"
                                                        />
                                                        <img
                                                            src="http://placehold.it/150x100"
                                                            alt="..."
                                                            className="margin"
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            {/* END timeline item */}
                                            <li>
                                                <i className="fa fa-clock-o bg-gray" />
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.tab-pane */}
                                    <div className="tab-pane" id="settings">
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <label
                                                    htmlFor="inputName"
                                                    className="col-sm-2 control-label"
                                                >
                                                    Name
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="inputName"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="inputEmail"
                                                    className="col-sm-2 control-label"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="inputEmail"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="inputName2"
                                                    className="col-sm-2 control-label"
                                                >
                                                    Name
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputName2"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="inputExperience"
                                                    className="col-sm-2 control-label"
                                                >
                                                    Experience
                                                </label>
                                                <div className="col-sm-10">
                                                    <textarea
                                                        className="form-control"
                                                        id="inputExperience"
                                                        placeholder="Experience"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="inputSkills"
                                                    className="col-sm-2 control-label"
                                                >
                                                    Skills
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputSkills"
                                                        placeholder="Skills"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" /> I agree to the{" "}
                                                            <a href="#">terms and conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" className="btn btn-danger">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.tab-pane */}
                                </div>
                                {/* /.tab-content */}
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.nav-tabs-custom */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </section>

    )
}

export default ContentProfile;