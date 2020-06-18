import multer from 'multer';

export const multerMiddleWare = () => {
	const storage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, 'uploads/');
		},
		filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.pdf');
		},
	});
	const upload = multer({
		storage,
		fileFilter: (req, file, cb) => {
			if (!file.originalname.match(/\.(pdf)$/)) {
				return cb(new Error('Seul les formats PDF sont acceptés'), false);
			}
			cb(null, true);
		},
	});
	const cpUpload = upload.fields([ { name: 'userSupport', maxCount: 1 }, { name: 'kulteurSupport', maxCount: 1 } ]);

	return cpUpload;
};

