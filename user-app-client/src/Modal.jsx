import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentCrud() {
  const [students, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("https://localhost:7007/GetAllUsers");
    setUsers(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7007/AddUser", {
        IdentityNumber: identityNumber,
        Email: email,
        Name: name,
        LastName: lastName,
        Password: password,
      });
      alert("Başarıyla Kaydedildi");
      setId("");
      setName("");
      setIdentityNumber("");
      setLastName("");
      setPassword("");
      setEmail("");
      setShowRegistrationForm(false); 

      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editStudent(student) {
    setName(student.name);
    setIdentityNumber(student.identityNumber);
    setLastName(student.lastName);
    setPassword(student.password);
    setEmail(student.email);
    setId(student.id);
    setShowRegistrationForm(true); // Edit butonuna basıldığında formu göster
  }

  async function DeleteStudent(id) {
    await axios.delete("https://localhost:7007/DeleteUser/" + id);
    alert("Üye başarıyla silindi");
    setId("");
    setName("");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(`https://localhost:7007/UpdateUser/${id}`, null, {
        params: {
          IdentityNumber: identityNumber,
          Email: email,
          Name: name,
          LastName: lastName,
          Password: password,
        },
      });
      alert("Kayıt Güncellendi");
      setId("");
      setName("");
      setShowRegistrationForm(false); // Güncelleme işlemi sonrası formu gizle
      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      
      <div className="container mt-4">
        {showRegistrationForm && (
          <form>
          <div class="form-group">
           
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>İsim</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label>Soyisim</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
             <label>Tc Kimlik Numarası</label>
            <input
              type="text"
              class="form-control"
              id="identityNumber"
              value={identityNumber}
              onChange={(event) => {
                setIdentityNumber(event.target.value);
              }}
            />
           
             <label>Şifre</label>
            <input
              type="text"
              class="form-control"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

          </div>
          
          <div class="form-group">
            <label> Mail Adresi </label>
            <input
              type="text"
              class="form-control"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Yeni Kullanıcı Oluştur
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Güncelle
            </button>
            <br />
          
        </form>
        )}
        <br />

        <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Tc Kimlik Numarası</th>
            <th scope="col">İsim</th>
            <th scope="col">Soyisim</th>
            <th scope="col">Şifre</th>
            <th scope="col">Mail Adresi</th>
          </tr>
        </thead>
        
          {students.map(function fn(student) {
            return (
              <tbody key={student.id}>
                <tr>
                <th scope="row">{student.identityNumber} </th>
                <td>{student.name}</td>
                <td>{student.lastName}</td>
                <td>{student.password}</td>
                <td>{student.email}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => editStudent(student)}
                    >
                      Düzenle
                    </button>
                    
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => DeleteStudent(student.id)}
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default StudentCrud;
