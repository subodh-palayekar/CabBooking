import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <div >
        <form class="row gx-3 gy-2 align-items-center mt-5 mx-5">
        <div class="col-sm-2 mx-3">
            <label class="visually-hidden" for="specificSizeInputName">Pick Up</label>
            <input type="text" class="form-control" id="specificSizeInputName" placeholder="Pick Up"/>
        </div>
        <div class="col-sm-2 mx-3">
            <label class="visually-hidden" for="specificSizeInputName">Drop</label>
            <input type="text" class="form-control" id="specificSizeInputName" placeholder="Drop"/>
        </div>
        <div class="col-sm-2 mx-3">
            <label class="visually-hidden" for="specificSizeInputName">Drop</label>
            <input type="text" class="form-control" id="specificSizeInputName" placeholder="Date"/>
        </div>
        <div class="col-sm-2 mx-3">
            <label class="visually-hidden" for="specificSizeInputName">Drop</label>
            <input type="text" class="form-control" id="specificSizeInputName" placeholder="Time"/>
        </div>
        
        {/* <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
            <div class="input-group">
            <div class="input-group-text">@</div>
            <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username"/>
            </div>
        </div> */}
        <div class="col-sm-1 mx-3">
            <label class="visually-hidden" for="specificSizeSelect">Passenger</label>
            <select class="form-select" id="specificSizeSelect">
            <option selected>Size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">More Than 4</option>
            </select>
        </div>
        {/* <div class="col-auto">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="autoSizingCheck2"/>
            <label class="form-check-label" for="autoSizingCheck2">
                Remember me
            </label>
            </div>
        </div> */}
        <div class="col-auto mx-3">
            <button type="submit" class="btn btn-primary">Book</button>
        </div>
      </form>
      </div>
    )
  }
}
