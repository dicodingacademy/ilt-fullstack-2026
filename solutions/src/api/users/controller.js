import ClientError from '../../exceptions/ClientError.js';

class UsersController {
  constructor(service) {
    this._service = service;

    this.postUserHandler = this.postUserHandler.bind(this);
    this.getUserByIdHandler = this.getUserByIdHandler.bind(this);
  }

  async postUserHandler(req, res) {
    try {
      const { username, password, role } = req.body;

      const userId = await this._service.addUser({ username, password, role });
      return res.status(201).json({
        status: 'success',
        message: 'User berhasil ditambahkan',
        data: {
          userId,
        },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      // Server ERROR!
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
    }
  }

  async getUserByIdHandler(req, res) {
    try {
      const { id } = req.params;

      const user = await this._service.getUserById(id);
      return res.json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      // server ERROR!
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
    }
  }
}

export default UsersController;
