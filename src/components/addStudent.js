import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import firebase from "./firebase";
import Stu from "../assets/stu.png";
import TextField from "./common/textField/TextField";
import Button from "./common/button/Button";
import Text from "./common/texts/Text";
import "./Style.css";
import Spinner from "./common/spinner/Spinner";

const AddStudent = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [progress, setProgress] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const storage = firebase.storage();

  const { batch } = useContext(GlobalContext);

  const onAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    const db = firebase.database().ref("Students");
    const stu = {
      Name: name,
      batch,
      photo: photoUrl,
      number,
    };
    db.push(stu);
    setLoading(false);
  };
  const photoHandleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  const onPhotoUpload = (e) => {
    // const { photo } = this.state;
    // if (photo === null) {
    //   this.setState({ photoError: "Select a photo" });
    //   return;
    // } else {
    // const uploadTask = storage.ref(`proofs/${proof.name}`).put(proof);
    const uploadTask = storage.ref(`photos/${photo.name}`).put(photo);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const pgt = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(pgt);
        // this.setState({ progress });
      },
      (error) => {
        // error function
        console.log(error);
      },
      () => {
        // complete function
        storage
          .ref("photos")
          .child(photo.name)
          .getDownloadURL()
          .then((url) => {
            // console.log(photoUrl);
            setPhotoUrl(url);
            // this.setState({ photoUrl });
          });
      }
    );
    // }
  };

  return (
    <div className="main-body">
      <Text text="Fill the form" type="head-text" mt={24} />
      <div className="upload-photo">
        <img src={photoUrl || Stu} alt="photo" className="upload-image" />
        <TextField name="photo" type="file" onChange={photoHandleChange} />

        {/* <span style={{ color: "red" }}>{this.state.photoError}</span> */}
        {/* <span className="upload-btn-gp"> */}
        <button onClick={onPhotoUpload}>Upload Photo</button>
        {/* <input type="file" onChange={photoHandleChange} /> */}
        {/* </span> */}
        <progress value={progress} max="100" />
      </div>
      {/* {
        photoUrl.length>0?
        <img
        src={photoUrl}
        alt=""
        className="current-avatar"
      />
        :
        <img
        src={Stu}
        alt=""
        className="current-avatar"
      />
      } */}

      {/* <Text text="What Others call You" type="head-text" mb={27} /> */}
      <TextField
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        mt={16}
      />
      <TextField
        placeholder="Roll Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        mt={16}
      />
      {loading ? (
        <span style={{ marginTop: "24px" }}>
          <Spinner />
        </span>
      ) : (
        <Button
          text="Add"
          type="normal"
          mt={24}
          mb={16}
          active={true}
          onPress={onAdd}
        />
      )}

      {/* <button onClick={onAdd}>Add</button> */}
    </div>
  );
};

export default AddStudent;
