import React from "react"
import table from "../images/table.jpg"
import decoradoGris from "../images/decoracion-gris.png"

const Reserve = () => {
  return (
    <section id="reserve">
      <div class="container-fluid">
        <div class="row justify-content-end align-items-center py-5">
          <div
            class="col-lg-11 p-lg-5 pt-4 text-center shadow  bg-light col"
            id="offers"
          >
            <div className="row">
              <div className="col-lg-6 text-left p-lg-5">
               <p className="lead">Reserve</p>
                <h1 className="display-4 mb-5">A table</h1>
                <form className="font-weight-bold">
                  <div class="form-group mb-4">
                    <label for="formGroupExampleInput">DATE</label>
                    <input
                      type="date"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Today"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="inputState">TIME</label>
                    <select id="inputState" class="form-control">
                      <option selected>7:00PM</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group mb-4">
                    <label for="inputState">GUESTS</label>
                    <select id="inputState" class="form-control">
                      <option selected>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10 mb-5">
                      <button type="submit" class="btn btn-primary">
                        Find a table
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-6 p-lg-5 col-12 py-4 mb-5">
              <img
                  src={decoradoGris}
                  className="float-right decorado-reserve"
                />
                <img src={table} className="img-fluid reserve-img" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Reserve
