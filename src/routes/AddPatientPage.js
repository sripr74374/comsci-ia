import React, { useState } from 'react'
import * as firebase from 'firebase'

const AddPatientPage = props => {
    const [file, setFile] = useState(null)
    return (
        <div>
            <input onChange={event => {
                setFile(event.target.files[0])
            }} type='file' accept="image/jpeg"></input>
            <button onClick={e => {
                console.log('Upload file')
                // Create a root reference
                var storageRef = firebase.storage().ref();

                // Create a reference to 'mountains.jpg'
                var patientRef = storageRef.child('patient.jpg');
                console.log('uploading...')
                var uploadTask = patientRef.put(file)
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }}>Upload</button>
        </div>
    )
}

export default AddPatientPage