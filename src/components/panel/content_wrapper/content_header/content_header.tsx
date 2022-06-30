
export const ContentHeader = () => {

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">صفحه سریع</h1>
                    </div>
                    {/* /.col */}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-left">
                            <li className="breadcrumb-item">
                                <a href="#">خانه</a>
                            </li>
                            <li className="breadcrumb-item active">صفحه سریع</li>
                        </ol>
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </div>
    )

}


