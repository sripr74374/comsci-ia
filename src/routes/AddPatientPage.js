import React, { useState } from 'react'
import * as firebase from 'firebase'

const AddPatientPage = props => {
    const [file, setFile] = useState(null)
    const [imgSource, setImageSource] = useState(null)
    const imgRef = React.useRef()
    const canvasRef = React.useRef()
    const canvasRef2 = React.useRef()

    React.useEffect(() => {
        console.log(file)
        if (file) {
            var reader = new FileReader()
            reader.onloadend = event => {
                console.log('onloaded')
                setImageSource(event.target.result)

            }
            reader.readAsDataURL(file)
            return () => { reader.abort() }
        }

    }, [file])
    const handleFileSelected = event => {
        console.log('handleFileSelected')
        setFile(event.target.files[0])
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <input onChange={handleFileSelected} type='file' accept="image/jpeg"></input>
            {imgSource && <img onLoad={() => {
                console.log('on loaded')
                //canvas
                var ctx = canvasRef.current.getContext('2d')
                ctx.drawImage(imgRef.current, 258, 454, 312, 78, 0, 0, 312, 156)
                // canvas2
                var ctx2 = canvasRef2.current.getContext('2d')
                ctx2.drawImage(imgRef.current, 258, 454, 312, 78, 0, 0, 312, 156)
            }} ref={imgRef} style={{ width: '360px', height: '508.5px', border: '2px solid black' }} src={imgSource}></img>}
            <canvas
                ref={canvasRef}
                style={{
                    width: '312px',
                    height: '78px',
                    border: '1px solid black'
                }} />
            <canvas
                ref={canvasRef2}
                style={{
                    width: '312px',
                    height: '78px',
                    border: '3px solid orange'
                }} />
            <button onClick={e => {
                console.log('Upload file')
                // Create a root reference
                var storageRef = firebase.storage().ref();

                firebase.firestore().collection('patients').add({
                    name: '',
                    created: new Date()
                })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        // Create a reference to 'mountains.jpg'
                        var patientRef = storageRef.child(`${docRef.id}.jpg`);
                        console.log('uploading...')
                        patientRef.put(file).then(() => {
                            patientRef.getDownloadURL().then(downloadURL => {
                                console.log('File available at', downloadURL);
                                firebase.firestore().collection('patients').doc(docRef.id).update({
                                    imgUrl: downloadURL
                                })
                            })
                        })
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });


            }}>Upload</button>
            <button onClick={e => {
                firebase.auth().signOut()
            }}>Logout</button>
        </div>
    )
}

export default AddPatientPage