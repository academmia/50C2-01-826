```html

<div className="my-3 my-md-5">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <div className="media">
                            <div className="media-body">
                                <p className="text-muted mb-0">App Settings:</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="form-label">API Server URL:</label>
                            <input className="form-control" type="text"  />
                        </div>
                        <div className="form-group">
                            <div className="form-label">Tasks</div>
                            <label className="custom-control custom-checkbox">
                                <input value="notifyOnTaskChange" 
                                    type="checkbox" className="custom-control-input" name="notifyOnTaskChange" />
                                <span className="custom-control-label">Notify on tasks changes </span>
                            </label>
                        </div>
                        <div className="form-group">
                            <button 
                                type="button" className="btn btn-outline-success">
                                Update settings </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```