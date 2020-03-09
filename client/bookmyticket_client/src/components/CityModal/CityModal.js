import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { MainContext } from "../App";
const CityModal = props => {
  const maincontext = useContext(MainContext);
  const handleClose = city => {
    fetch(`https://bookmyticket-app-movies.herokuapp.com/api/view/${city}`)
      .then(res => res.json())
      .then(data => {
        let result = data.data[0];
        let city = result.city_name;
        maincontext.dispatcher({ type: "Set City", payload: city });
        let movies = [];
        result.theatres.map(item => {
          return item.movies.map(item => {
            return movies.push(item);
          });
        });
        maincontext.dispatcher({ type: "Fetch Upcoming", payload: movies });
        maincontext.dispatcher({ type: "Close Modal", payload: !modalShow });
      })
      .catch(err => {
        console.log(err);
        maincontext.dispatcher({ type: "Close Modal", payload: !modalShow });
      });
  };
  const modalShow = maincontext.state.modalShow;
  return (
    <Modal
      show={modalShow}
      //  onHide={handleClose}
      className="mt-5"
      size="lg"
      id="example-modal-sizes-title-lg"
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Body>
        <input
          type="text"
          className="form-control form-control-lg city-modal-input mt-2 mb-5"
          placeholder="search for cities"
        />
        <h4 className="text-center text-muted"> Popular Cities</h4>
        <div className="city-modal-body mt-5 mb-3">
          <div className="city-modal-wrapper">
            <div>
              <svg
                onClick={() => {
                  handleClose("Mumbai");
                }}
                height="40pt"
                viewBox="0 -16 480 480"
                width="48pt"
                xmlns="http://www.w3.org/2000/svg"
                className="city-modal"
              >
                <path d="m184 232h16v16h-16zm0 0" />
                <path d="m280 232h16v16h-16zm0 0" />
                <path d="m56 272h16v16h-16zm0 0" />
                <path d="m88 272h16v16h-16zm0 0" />
                <path d="m408 272h16v16h-16zm0 0" />
                <path d="m376 272h16v16h-16zm0 0" />
                <path d="m216 120h16v16h-16zm0 0" />
                <path d="m248 120h16v16h-16zm0 0" />
                <path d="m280 120h16v16h-16zm0 0" />
                <path d="m184 120h16v16h-16zm0 0" />
                <path d="m88 176h16v16h-16zm0 0" />
                <path d="m56 176h16v16h-16zm0 0" />
                <path d="m456 160h16v-48h-112v-72c0-9.40625-9.542969-16.800781-16-20.6875v-19.3125h-16v19.3125c-6.457031 3.917969-16 11.28125-16 20.6875v16h-64v-32h-16v32h-64v-16c0-9.40625-9.542969-16.800781-16-20.6875v-19.3125h-16v19.3125c-6.457031 3.917969-16 11.28125-16 20.6875v72h-112v48h16v48h-24v48h24v128h-24v64h480v-64h-24v-128h24v-48h-24zm-96-32h96v16h-96zm0 32h80v48h-80zm0 96h80v128h-16v-40c0-13.253906-10.746094-24-24-24s-24 10.746094-24 24v40h-16zm48 88v40h-16v-40c0-4.417969 3.582031-8 8-8s8 3.582031 8 8zm-72-310.808594c3.105469 1.695313 5.832031 4.011719 8 6.808594v24h-16v-23.648438c2.070312-2.980468 4.808594-5.429687 8-7.160156zm-8 142.808594v-24h16v24zm16 16v192h-16v-192zm-16-56v-16h16v16zm0-32v-24h16v24zm-160-32h144v16h-144zm0 32h144v48h-144zm144 64v32h-16v-32zm-32 0v32h-16v-32zm-32 0v32h-16v-32zm-32 0v32h-16v-32zm-48 0h16v32h-16zm-24-134.808594c3.105469 1.695313 5.832031 4.011719 8 6.808594v24h-16v-23.648438c2.070312-2.980468 4.808594-5.429687 8-7.160156zm-8 142.808594v-24h16v24zm16 16v192h-16v-192zm-16-56v-16h16v16zm0-32v-24h16v24zm-112 24h96v16h-96zm96 32v48h-80v-48zm-104 80v-16h104v16zm64 80c-13.253906 0-24 10.746094-24 24v40h-16v-128h80v128h-16v-40c0-13.253906-10.746094-24-24-24zm8 24v40h-16v-40c0-4.417969 3.582031-8 8-8s8 3.582031 8 8zm104 88h-176v-32h176zm80 0h-64v-32h64zm0-48h-64v-96c0-6.199219 16.121094-20.359375 32-30.574219 15.878906 10.214844 32 24.375 32 30.574219zm-27.878906-142.855469-4.121094-2.472656-4.121094 2.472656c-10.277344 6.175781-43.878906 27.808594-43.878906 46.855469v96h-24v-168h144v168h-24v-96c0-19.046875-33.601562-40.679688-43.878906-46.855469zm219.878906 158.855469v32h-176v-32zm0-176v16h-104v-16zm0 0" />
                <path d="m376 176h16v16h-16zm0 0" />
                <path d="m408 176h16v16h-16zm0 0" />
              </svg>
            </div>
            <div>
              <p className="city-modal-title mt-2 text-center">Mumbai</p>
            </div>
          </div>
          {/* second one */}
          <div className="city-modal-wrapper">
            <div>
              <svg
                onClick={() => {
                  handleClose("Hyderabad");
                }}
                height="40pt"
                viewBox="0 0 60 60"
                width="48pt"
                className="city-modal"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Shape"
                  d="m1 60h58c.5522847 0 1-.4477153 1-1v-28c.0043858-1.0825582-.3469564-2.1365849-1-3v-14c.5522847 0 1-.4477153 1-1-.0059555-3.46554962-2.0011946-6.61981658-5.13-8.11-.4820834-1.53649202-1.2828479-2.95401554-2.35-4.16-.3796661-.43050087-.9259988-.67712434-1.5-.67712434s-1.1203339.24662347-1.5.67712434c-1.0671521 1.20598446-1.8679166 2.62350798-2.35 4.16-3.1443925 1.47865825-5.1567105 4.63531184-5.17 8.11 0 .5522847.4477153 1 1 1v14c-.4443162.5918453-.7517102 1.2749429-.9 2h-2.1v-23c1.1045695 0 2-.8954305 2-2 0-1.86.17-2.86-1.67-4.48-.7581689-.67508438-1.9018311-.67508438-2.66 0-1.83 1.61-1.67 2.6-1.67 4.48 0 1.1045695.8954305 2 2 2v2h-2.22c-.42755-1.19998107-1.0602879-2.31657742-1.87-3.3-.3456469-.42350504-.8633481-.66921766-1.41-.66921766s-1.0643531.24571262-1.41.66921766c-.4230629.59714324-.7880573 1.23337199-1.09 1.9-.3019427-.66662801-.6669371-1.30285676-1.09-1.9-.3456469-.42350504-.8633481-.66921766-1.41-.66921766s-1.0643531.24571262-1.41.66921766c-.8097121.98342258-1.44245 2.10001893-1.87 3.3h-2.22v-2c1.1045695 0 2-.8954305 2-2 0-1.86.17-2.86-1.67-4.48-.7581689-.67508438-1.9018311-.67508438-2.66 0-1.83 1.61-1.67 2.6-1.67 4.48 0 1.1045695.8954305 2 2 2v23h-2.1c-.1482898-.7250571-.4556838-1.4081547-.9-2v-14c.5522847 0 1-.4477153 1-1-.0059555-3.46554962-2.0011946-6.61981658-5.13-8.11-.4820834-1.53649202-1.2828479-2.95401554-2.35-4.16-.3796661-.43050087-.92599883-.67712434-1.5-.67712434s-1.12033392.24662347-1.5.67712434c-1.08150157 1.2023283-1.89604668 2.62011393-2.39 4.16-3.12880536 1.49018342-5.12404451 4.64445038-5.13 8.11 0 .5522847.44771525 1 1 1v14c-.6530436.8634151-1.00438582 1.9174418-1 3v28c0 .5522847.44771525 1 1 1zm1-28h14v26h-2v-12.82c0-2.59-.93-4.28-3.67-6.68-.75816885-.6750844-1.90183115-.6750844-2.66 0-2.74 2.4-3.67 4.09-3.67 6.68v12.82h-2zm3-4.0000004v2.0000004h-2.83c.42397528-1.1991837 1.55807381-2.0006668 2.83-2.0000004zm6-13.9999996v6.56c-1.22807006-.7492691-2.77192994-.7492691-4 0v-6.56zm4.83 16h-2.83v-2.0000004c1.2719262-.0006664 2.4060247.8008167 2.83 2.0000004zm-8.83-6c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v6h-4zm-1 34v-12.82c0-1.73.45-3 3-5.17 2.54 2.22 3 3.44 3 5.17v12.82zm16-11 1.15-2h13.7c.11 0 0-.2 1.07 2zm2 11v-9h12v9zm23-30.0000004v2.0000004h-2.83c.4239753-1.1991837 1.5580738-2.0006668 2.83-2.0000004zm6-13.9999996v6.56c-1.2280701-.7492691-2.7719299-.7492691-4 0v-6.56zm4.83 16h-2.83v-2.0000004c1.2719262-.0006664 2.4060247.8008167 2.83 2.0000004zm-8.83-6c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v6h-4zm-1 34v-12.82c0-1.73.45-3 3-5.17 2.54 2.22 3 3.44 3 5.17v12.82zm10 0h-2v-12.82c0-2.59-.93-4.28-3.67-6.68-.7581689-.6750844-1.9018311-.6750844-2.66 0-2.74 2.4-3.67 4.09-3.67 6.68v12.82h-2v-26h14zm-1-31.58c-.6301043-.2778734-1.3113461-.4209341-2-.42v-12h2zm-6-24.42c.5494458.65691576 1.0318443 1.3671136 1.44 2.12-.9432617-.16001786-1.9067383-.16001786-2.85 0 .4040084-.74840159.8759965-1.45805741 1.41-2.12zm0 4c3.4803793-.00089333 6.4328031 2.55531772 6.93 6h-13.86c.4971969-3.44468228 3.4496207-6.00089333 6.93-6zm-4 8v12c-.6886539-.0009341-1.3698957.1421266-2 .42v-12.42zm-5 44h-4v-9c.6943042-.0038075 1.3369569-.3674343 1.6977697-.9606349.3608127-.5932006.3881539-1.3310892.0722303-1.9493651l-1.08-2c-.3636086-.6765648-1.0719421-1.0961754-1.84-1.09h-13.7c-.7659102-.0081499-1.4737177.4073023-1.84 1.08l-1.08 2c-.320727.6190788-.2959023 1.3605029.0655164 1.9567417.3614188.5962389 1.0072604.9612247 1.7044836.9632583v9h-4v-26h24zm-20-37.44v-2.56h16v2.56c-1.6439342-.980929-3.7554979-.6346326-5 .82-.7593322-.8610017-1.8519977-1.3542487-3-1.3542487s-2.2406678.493247-3 1.3542487c-1.2401678-1.4623108-3.3577206-1.8095894-5-.82zm6 3.44c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v6h-4zm6 6v-6c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v6zm5-28c1.18 1 1 1.32 1 3h-2c0-1.71-.16-2 1-3zm-6.49 5.15c.4446662.57440051.8268259 1.19457194 1.14 1.85h-2.11c.2905733-.63329642.6143567-1.25082135.97-1.85zm-5 0c.3658531.59852637.6996567 1.21606294 1 1.85h-2.16c.3131741-.65542806.6953338-1.27559949 1.14-1.85zm10.49 3.85v5h-16v-5zm-17-9c1.18 1 1 1.32 1 3h-2c0-1.71-.16-2 1-3zm1 22c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v6h-4zm-7 2.42c-.6301043-.2778734-1.3113461-.4209341-2-.42v-12h2zm-6-24.42c.54944579.65691576 1.0318443 1.3671136 1.44 2.12-.94326165-.16001786-1.90673835-.16001786-2.85 0 .40400842-.74840159.87599649-1.45805741 1.41-2.12zm0 4c3.4803793-.00089333 6.4328031 2.55531772 6.93 6h-13.86c.49719694-3.44468228 3.44962071-6.00089333 6.93-6zm-4 8v12c-.68865393-.0009341-1.36989565.1421266-2 .42v-12.42z"
                />
              </svg>
            </div>
            <div>
              <p className="mt-2 city-modal-title text-center">Hyderabad</p>
            </div>
          </div>
          {/* //ends here */}
          {/* 3rd starts here */}
          <div className="city-modal-wrapper">
            <div>
              <svg
                onClick={() => {
                  handleClose("Delhi");
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="48pt"
                height="40pt"
                className="city-modal"
                viewBox="0 0 128 128"
              >
                <g>
                  <path d="M120.75,37.75h-8.2V29.328a1.75,1.75,0,0,0-1.75-1.75H100.545V12.667a1.749,1.749,0,0,0-1.75-1.75H84.437L74.948.567A1.753,1.753,0,0,0,73.658,0H54.342a1.753,1.753,0,0,0-1.29.567l-9.489,10.35H29.205a1.749,1.749,0,0,0-1.75,1.75V27.578H17.2a1.75,1.75,0,0,0-1.75,1.75V37.75H7.25A1.75,1.75,0,0,0,5.5,39.5v5.172a6.758,6.758,0,0,0,6.75,6.75h.781V116.07a5.758,5.758,0,0,0-5.156,5.72v4.46A1.75,1.75,0,0,0,9.625,128h38.2a1.75,1.75,0,0,0,1.75-1.75v-4.46a5.759,5.759,0,0,0-5.155-5.72V83.54a13.3,13.3,0,0,1,7.622-12L64,65.933l11.961,5.611a13.3,13.3,0,0,1,7.622,12v32.53a5.759,5.759,0,0,0-5.155,5.72v4.46a1.75,1.75,0,0,0,1.75,1.75h38.2a1.75,1.75,0,0,0,1.75-1.75v-4.46a5.758,5.758,0,0,0-5.156-5.72V51.422h.781a6.758,6.758,0,0,0,6.75-6.75V39.5A1.75,1.75,0,0,0,120.75,37.75ZM55.111,3.5H72.889l6.8,7.417H48.312ZM30.955,14.417h66.09V27.578H30.955Zm-12,16.661h90.1V37.75h-90.1ZM40.917,116.04H16.531V93.75H40.917Zm0-25.79H16.531V85.29H40.917Zm5.155,31.54v2.71h-34.7v-2.71a2.253,2.253,0,0,1,2.25-2.25h30.2A2.253,2.253,0,0,1,46.072,121.79Zm41.011-36.5h24.386v4.96H87.083Zm24.386,8.46v22.29H87.083V93.75Zm5.156,28.04v2.71h-34.7v-2.71a2.252,2.252,0,0,1,2.25-2.25h30.2A2.253,2.253,0,0,1,116.625,121.79Zm-5.156-40H86.98a16.818,16.818,0,0,0-9.533-13.415l-12.7-5.959a1.748,1.748,0,0,0-1.486,0l-12.7,5.959A16.818,16.818,0,0,0,41.02,81.79H16.531V51.422h94.938ZM119,44.672a3.254,3.254,0,0,1-3.25,3.25H12.25A3.254,3.254,0,0,1,9,44.672V41.25H119Z" />
                  <path d="M93.711,68.93h6.5a4.756,4.756,0,0,0,4.75-4.75v-1.5a4.756,4.756,0,0,0-4.75-4.75h-6.5a4.756,4.756,0,0,0-4.75,4.75v1.5A4.756,4.756,0,0,0,93.711,68.93Zm-1.25-6.25a1.25,1.25,0,0,1,1.25-1.25h6.5a1.251,1.251,0,0,1,1.25,1.25v1.5a1.252,1.252,0,0,1-1.25,1.25h-6.5a1.251,1.251,0,0,1-1.25-1.25Z" />
                  <path d="M27.789,68.93h6.5a4.756,4.756,0,0,0,4.75-4.75v-1.5a4.756,4.756,0,0,0-4.75-4.75h-6.5a4.756,4.756,0,0,0-4.75,4.75v1.5A4.756,4.756,0,0,0,27.789,68.93Zm-1.25-6.25a1.251,1.251,0,0,1,1.25-1.25h6.5a1.25,1.25,0,0,1,1.25,1.25v1.5a1.251,1.251,0,0,1-1.25,1.25h-6.5a1.252,1.252,0,0,1-1.25-1.25Z" />
                  <path d="M88.5,19.248h-49a1.75,1.75,0,0,0,0,3.5h49a1.75,1.75,0,0,0,0-3.5Z" />
                </g>
              </svg>
            </div>
            <div>
              <p className="mt-2 city-modal-title text-center">Delhi</p>
            </div>
          </div>
          {/* ends here  */}
          {/* Benagaluru starts here*/}
          <div className="city-modal-wrapper">
            <div>
              <svg
                onClick={() => {
                  handleClose("Bangaluru");
                }}
                id="Layer_5"
                enableBackground="new 0 0 64 64"
                height="40pt"
                viewBox="0 0 64 64"
                width="48pt"
                className="city-modal"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m59 56.879c2.279-.558 4-2.981 4-5.879s-1.721-5.321-4-5.879v-32.121h-2v-4h-4v-4h-2.025l.025-3.994-2-.013-.025 4.007h-1.975v4h-4v4h-2v8.678c-2.168.589-4.198 1.544-6 2.82v-9.498h4v-6h-5v-4h-2.025l.025-3.994-2-.013-.025 4.007h-1.975v4h-5v6h4v19.219l-4-1v-8.219h2v-2h-6v-6h-2v6h-2v-2h-2v2h-2v-4h-2v4h-6v2h2v31.026c-1.207.913-2 2.347-2 3.974 0 .338.045.671.112 1h-2.112v2h62v-2h-4zm-30-1.449c-1.429-.619-3.148-.541-4.498.245-1.315-1.673-3.337-2.675-5.502-2.675-1.478 0-2.856.465-4 1.261v-20.98l14 3.5zm.754-20.523.111-.277c2.208-6.638 8.215-11.198 15.135-11.601v34.666c-1.113-.532-2.366-.789-3.661-.663-1.139-2.443-3.589-4.032-6.339-4.032-1.457 0-2.844.463-4 1.27v-19.051zm19.246 16.093v3.754c-1.161-.552-2-2.018-2-3.754 0-2.206 1.346-4 3-4s3 1.794 3 4c0 1.736-.839 3.202-2 3.754v-3.754zm-2 8.135v-3.347c.582.527 1.26.909 2 1.09v4.122h-.699c-.334-.699-.773-1.324-1.301-1.865zm4-2.256c1.222-.299 2.278-1.138 3-2.294.722 1.157 1.778 1.995 3 2.294v4.121h-6zm10-5.879c0 1.736-.839 3.202-2 3.754v-3.754h-2v3.754c-1.161-.552-2-2.018-2-3.754 0-2.206 1.346-4 3-4s3 1.794 3 4zm-12-44h2v2h-2zm-4 4h2 6 2v2h-10zm-2 4h14v30.121c-1.222.299-2.278 1.138-3 2.294-.913-1.462-2.364-2.415-4-2.415-1.126 0-2.163.455-3 1.211v-25.211h-1c-1.017 0-2.019.081-3 .237zm-13-8h2v2h-2zm-5 4h12v2h-12zm8 4v11.139c-1.625 1.522-2.987 3.333-4 5.376v-16.515zm-26 10h14v7.719l-8-2v25.694c-.123.208-.248.415-.351.637-.21-.029-.424-.045-.646-.047-.938-1.249-2.42-2.003-4.003-2.003-.342 0-.677.035-1 .101zm-2 35c0-1.654 1.346-3 3-3 1.081 0 2.083.585 2.615 1.527l.31.549 1.075-.076c.294 0 .604.057.949.173l.971.326.303-.979c.651-2.105 2.571-3.52 4.777-3.52 1.819 0 3.497.991 4.378 2.587l.625 1.132.938-.89c1.128-1.068 2.988-1.068 4.116 0l.938.89.625-1.132c.883-1.596 2.561-2.587 4.38-2.587 2.171 0 4.081 1.388 4.753 3.454l.281.863.887-.196c1.977-.439 3.916.376 5.056 1.879h-40.783c-.114-.322-.194-.655-.194-1z" />
                  <path d="m17 27h2v2h-2z" />
                  <path d="m9 27h2v2h-2z" />
                  <path d="m13 27h2v2h-2z" />
                  <path d="m9 43h2v2h-2z" />
                  <path d="m9 39h2v2h-2z" />
                  <path d="m9 35h2v2h-2z" />
                  <path d="m9 47h2v2h-2z" />
                  <path d="m9 31h2v2h-2z" />
                  <path d="m9 51h2v2h-2z" />
                  <path d="m53 17h2v2h-2z" />
                  <path d="m49 17h2v2h-2z" />
                  <path d="m45 17h2v2h-2z" />
                  <path d="m17 49h2v2h-2z" />
                  <path d="m17 45h2v2h-2z" />
                  <path d="m17 41h2v2h-2z" />
                  <path d="m17 37h2v2h-2z" />
                  <path d="m21 37h2v2h-2z" />
                  <path d="m21 41h2v2h-2z" />
                  <path d="m21 49h2v2h-2z" />
                  <path d="m21 45h2v2h-2z" />
                  <path d="m25 49h2v2h-2z" />
                  <path d="m25 41h2v2h-2z" />
                  <path d="m25 37h2v2h-2z" />
                  <path d="m25 45h2v2h-2z" />
                  <path d="m37 49h2v2h-2z" />
                  <path d="m33 49h2v2h-2z" />
                  <path d="m41 49h2v2h-2z" />
                  <path d="m37 45h2v2h-2z" />
                  <path d="m33 45h2v2h-2z" />
                  <path d="m41 45h2v2h-2z" />
                  <path d="m41 41h2v2h-2z" />
                  <path d="m33 41h2v2h-2z" />
                  <path d="m37 41h2v2h-2z" />
                  <path d="m33 37h2v2h-2z" />
                  <path d="m41 37h2v2h-2z" />
                  <path d="m37 37h2v2h-2z" />
                  <path d="m41 33h2v2h-2z" />
                  <path d="m37 33h2v2h-2z" />
                  <path d="m33 33h2v2h-2z" />
                  <path d="m37 29h2v2h-2z" />
                  <path d="m41 29h2v2h-2z" />
                  <path d="m49 21h2v2h-2z" />
                  <path d="m53 21h2v2h-2z" />
                  <path d="m53 25h2v2h-2z" />
                  <path d="m49 25h2v2h-2z" />
                  <path d="m49 29h2v2h-2z" />
                  <path d="m53 29h2v2h-2z" />
                  <path d="m53 33h2v2h-2z" />
                  <path d="m49 33h2v2h-2z" />
                  <path d="m49 37h2v2h-2z" />
                  <path d="m53 37h2v2h-2z" />
                  <path d="m53 41h2v2h-2z" />
                  <path d="m49 41h2v2h-2z" />
                </g>
              </svg>
            </div>
            <div>
              <p className="mt-2 city-modal-title text-center">Benagaluru</p>
            </div>
          </div>
          {/* ends here */}
          {/* chennai starts here */}
          <div className="city-modal-wrapper">
            <div>
              <svg
                onClick={() => {
                  handleClose("Chennai");
                }}
                height="40pt"
                viewBox="0 0 60 60"
                width="48pt"
                className="city-modal"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Shape"
                  d="m58 37v-2c0-1.1045695-.8954305-2-2-2v-2c0-1.1045695-.8954305-2-2-2h-6v-2.382c.0034625-.7570187-.4228994-1.4504382-1.1-1.789l-6-3c-.6204662-.3126559-1.3587395-.2808963-1.9500631.0838891-.5913235.3647855-.9509596 1.0103225-.9499369 1.7051109v17.382h-2v-3c0-1.1045695-.8954305-2-2-2h-4.1c-.243-3.728-.476-7.832-.681-12.268.4715902-.269499.8126034-.7199687.944-1.247l.629-2.514c1.814998-.1378721 3.2173335-1.6507729 3.2173335-3.471s-1.4023355-3.3331279-3.2173335-3.471l-.629-2.514c-.1532863-.6081175-.5842675-1.10839652-1.163-1.35v-2.165c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1v-.5c.0033847-.9289377-.3645594-1.82071613-1.022-2.477-1.0009709-1.00350782-2.5083542-1.30424372-3.8177798-.76167981-1.3094255.5425639-2.1623505 1.82129975-2.1602202 3.23867981v.5c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1v2.165c-.5771962.24261485-1.0065538.74272944-1.159 1.35l-.629 2.514c-1.814998.1378721-3.2173335 1.6507729-3.2173335 3.471s1.4023355 3.3331279 3.2173335 3.471l.629 2.514c.1313966.5270313.4724098.977501.944 1.247-.117 2.532-.243 4.961-.375 7.268h-10.41v-1c0-1.1045695-.8954305-2-2-2h-4c-1.1045695 0-2 .8954305-2 2v2c-1.1045695 0-2 .8954305-2 2v2.278c-.61675126.3544126-.997855 1.0106732-1 1.722v22c0 .5522847.44771525 1 1 1h58c.5522847 0 1-.4477153 1-1v-21c0-1.1045695-.8954305-2-2-2zm-10-2h8v2h-8zm6-4v2h-6v-2zm-16 16h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h3v2h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h3v2h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h3v2h-6.112c-.238-2.045-.853-7.634-1.5-16h7.612zm-9.781-25h-5.439l-.5-2h6.439zm-4.444 2h3.45c.318 6.841.7 12.9 1.085 18v.012c.654 8.707 1.29 14.642 1.564 16.988h-8.748c.428-3.72 1.788-16.467 2.649-35zm10.225 14v3h-3.758c-.0713333-.968-.1423333-1.968-.213-3zm-6-25h-5.719l.5-2h5.439l.5 2zm-4-8.5c0-.82842712.6715729-1.5 1.5-1.5s1.5.67157288 1.5 1.5v4.5h-3zm-5 12c0-.8284271.6715729-1.5 1.5-1.5h10c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-10c-.8284271 0-1.5-.6715729-1.5-1.5zm-14 13.5h4v2h-4zm-2 4h6v2h-6zm-1 4h7v21h-7zm9-1v-4h10.293c-.84 13.905-1.858 23.223-2.181 26h-8.112zm29 18h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3v-2h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3v-2h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3v-2h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3v-2h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3v-2h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3v-2h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3v-5.382l6 3v32.382h-6zm18 4h-10v-20h10z"
                />
                <path
                  id="Shape"
                  d="m55 42h-4c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h4c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m55 46h-4c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h4c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m55 50h-4c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h4c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m55 54h-4c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h4c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m6 41h-1c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h1c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m6 45h-1c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h1c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m6 49h-1c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h1c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m6 53h-1c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h1c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m14 37h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"
                />
                <path
                  id="Shape"
                  d="m16 39h-2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m16 43h-2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m16 47h-2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m16 51h-2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
                <path
                  id="Shape"
                  d="m16 55h-2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                />
              </svg>
            </div>
            <div>
              <p className="mt-2 city-modal-title text-center">Chennai</p>
            </div>
          </div>
          {/* chennai ends here */}
          {/* pune starts here */}
          <div className="city-modal-wrapper">
            <div>
              <svg
                onClick={() => {
                  handleClose("Pune");
                }}
                height="40pt"
                viewBox="0 0 512 512"
                width="48pt"
                className="city-modal"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Outline">
                  <path d="m320 288v-104a8 8 0 0 0 -10.353-7.646l-104 32a8 8 0 0 0 -5.647 7.646v80h16v-74.091l88-27.077v29.168h-32v16h32v16h-56v16h56v16z" />
                  <path d="m136 104h88v80h16v-88a8 8 0 0 0 -8-8h-8v-24a8 8 0 0 0 -8-8h-8v-24a8 8 0 0 0 -8-8h-40a8 8 0 0 0 -8 8v24h-8a8 8 0 0 0 -8 8v24h-8a8 8 0 0 0 -8 8v96h16zm32-64h24v16h-24zm-16 32h56v16h-56z" />
                  <path d="m288 83.352 96 34.286v74.362h16v-80a8 8 0 0 0 -5.31-7.534l-18.69-6.675v-42.362a8 8 0 0 0 -5.31-7.534l-18.69-6.676v-17.219h-16v11.505l-13.31-4.753a8 8 0 0 0 -10.69 7.534v36.648l-29.31-10.468a8 8 0 0 0 -10.69 7.534v96h16zm40-33.714 32 11.428v31.011l-32-11.429z" />
                  <path d="m480 480v-264a8 8 0 0 0 -8-8h-8v-16h-16v16h-16v-16h-16v16h-56a8 8 0 0 0 -8 8v72h16v-64h96v24h-72v16h72v16h-32v16h32v16h-32v16h32v16h-32v16h32v16h-40v16h40v16h-40v16h40v16h-40v16h40v24h-64v-120h8a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8.884-7.951l-144 16a8 8 0 0 0 -7.116 7.951v32a8 8 0 0 0 8 8h8v120h-40v-160a8 8 0 0 0 -8-8h-40v-8a24.039 24.039 0 0 0 -16-22.624v-17.376h-16v17.376a24.039 24.039 0 0 0 -16 22.624v8h-8a8 8 0 0 0 -8 8v160h-72v-24h48v-16h-48v-16h40v-16h-40v-16h40v-16h-40v-16h48v-16h-48v-16h40v-16h-40v-16h64v-16h-64v-16h72v-16h-72v-24h104v24h16v-32a8 8 0 0 0 -8-8h-56v-16h-16v16h-16v-32h-16v32h-16a8 8 0 0 0 -8 8v264h-16v16h480v-16zm-208-152.84 128-14.222v31.062h-128zm16 32.84h96v120h-96zm-136-56a8 8 0 0 1 16 0v8h-16zm-16 24h80v152h-80z" />
                  <path d="m312 376h16v16h-16z" />
                  <path d="m160 120h16v16h-16z" />
                  <path d="m152 176h16v16h-16z" />
                  <path d="m192 152h16v16h-16z" />
                  <path d="m344 376h16v16h-16z" />
                  <path d="m312 408h16v16h-16z" />
                  <path d="m344 408h16v16h-16z" />
                  <path d="m312 440h16v16h-16z" />
                  <path d="m344 440h16v16h-16z" />
                  <path d="m152 352h16v104h-16z" />
                  <path d="m184 352h16v104h-16z" />
                  <path d="m304 120h16v16h-16z" />
                  <path d="m352 136h16v16h-16z" />
                  <path d="m336 176h16v16h-16z" />
                </g>
              </svg>
            </div>
            <div>
              <p className="mt-2 city-modal-title text-center">Pune</p>
            </div>
          </div>
          {/* pune ends here */}
          {/* kochi starts here */}
          <div className="city-modal-wrapper">
            <div>
              <svg
                onClick={() => {
                  handleClose("Kochi");
                }}
                height="40pt"
                viewBox="0 0 496 496"
                width="48pt"
                className="city-modal"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m64 304h16v16h-16zm0 0" />
                <path d="m112 304h16v16h-16zm0 0" />
                <path d="m160 304h16v16h-16zm0 0" />
                <path d="m480 312h-64v-32h48c17.648438 0 32-14.351562 32-32 0-15.070312-10.480469-27.742188-24.519531-31.121094-3.457031-23.09375-23.433594-40.878906-47.480469-40.878906-2.703125 0-5.367188.3125-8 .769531v-128.769531h-32v-48h-272v16.769531c-5.601562.964844-11.007812 2.871094-16 5.796875-7.34375-4.308594-15.535156-6.566406-24-6.566406-24.046875 0-44.023438 17.785156-47.480469 40.878906-14.039062 3.378906-24.519531 16.050782-24.519531 31.121094 0 17.648438 14.351562 32 32 32h48v152h-64v176h-16v48h496v-48h-16zm-24-88v8h8c8.824219 0 16 7.175781 16 16s-7.175781 16-16 16h-128c-8.824219 0-16-7.175781-16-16s7.175781-16 16-16h8v-8c0-17.648438 14.351562-32 32-32 6.855469 0 13.496094 2.273438 19.175781 6.558594l4.824219 3.640625 4.824219-3.640625c5.679687-4.285156 12.320312-6.558594 19.175781-6.558594 17.648438 0 32 14.351562 32 32zm-56-41.433594c-7.34375-4.308594-15.535156-6.566406-24-6.566406-20.847656 0-38.601562 13.390625-45.207031 32h-58.792969v16h42.902344c-6.671875 5.871094-10.902344 14.441406-10.902344 24 0 17.648438 14.351562 32 32 32h64v32h-144v-248h144zm-32-134.566406h-112v-32h112zm-128-32v32h-112v-32zm-208 88c-8.824219 0-16-7.175781-16-16s7.175781-16 16-16h8v-8c0-17.648438 14.351562-32 32-32 6.855469 0 13.496094 2.273438 19.175781 6.558594l4.824219 3.640625 4.824219-3.640625c3.421875-2.582032 7.214843-4.335938 11.175781-5.398438v14.839844h-32v56zm64-40h144v248h-16v-40h-128zm-64 224h176v72h224v-16h-208v-16h240v16h-16v16h16v88h-16v-72h-64v72h-16v-72h-64v72h-16v-72h-64v72h-48v-112h-16v112h-32v-112h-16v112h-32v-112h-16v112h-32zm400 160h-32v-56h32zm-80 0h-32v-56h32zm-80 0h-32v-56h32zm208 32h-464v-16h464zm0 0" />
                <path d="m112 80h112v16h-112zm0 0" />
                <path d="m112 144h112v16h-112zm0 0" />
                <path d="m112 208h112v16h-112zm0 0" />
                <path d="m128 112h16v16h-16zm0 0" />
                <path d="m160 112h16v16h-16zm0 0" />
                <path d="m192 112h16v16h-16zm0 0" />
                <path d="m128 176h16v16h-16zm0 0" />
                <path d="m160 176h16v16h-16zm0 0" />
                <path d="m192 176h16v16h-16zm0 0" />
                <path d="m128 240h16v16h-16zm0 0" />
                <path d="m160 240h16v16h-16zm0 0" />
                <path d="m192 240h16v16h-16zm0 0" />
                <path d="m272 80h112v16h-112zm0 0" />
                <path d="m272 144h112v16h-112zm0 0" />
                <path d="m288 112h16v16h-16zm0 0" />
                <path d="m320 112h16v16h-16zm0 0" />
                <path d="m352 112h16v16h-16zm0 0" />
                <path d="m288 176h16v16h-16zm0 0" />
                <path d="m320 176h16v16h-16zm0 0" />
              </svg>
            </div>
            <div>
              <p className="mt-2 city-modal-title text-center">Kochi</p>
            </div>
          </div>
          {/* kochi ends here */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CityModal;
