import Axios from "axios";

const API_URL = "http://localhost:4000/api";

export class CamerasCatalogue {
  async add(newCamera) {
    return await Axios.post(`${API_URL}/camera`, newCamera).then(
      res => res.data
    );
  }

  async getById(id) {
    return await Axios.get(`${API_URL}/camera/${id}`).then(res => res.data);
  }

  async getAll() {
    return await Axios.get(`${API_URL}/camera`).then(res => res.data);
  }

  async update(id, newCamera) {
    return await Axios.put(`${API_URL}/camera/${id}`, newCamera).then(
      res => res.data
    );
  }

  async delete(id) {
    return await Axios.delete(`${API_URL}/camera/${id}`).then(res => res.data);
  }
}
