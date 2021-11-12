import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



import InputFileAvatarMain from "components/inputs/InputFileAvatarMain";
import UploadAndDeleteFile from "components/uploads/UploadAndDeleteFile";
import TextAreaFroala from "components/textarea/TextAreaFroala";

import FieldAttribute from "../components/FieldAttribute";

export default function EditProductPage() {
  const [addFieldAttribute, setAddFieldAttribute] = React.useState([0]);
  const [imageArray, setImageArray] = React.useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const hanldeAddFieldAttribute = () => {
    setAddFieldAttribute([...addFieldAttribute, 0]);
  }

  const hanldeUploadMultipleIamge = (e) => {
    if (e.target.files) {
      /* Get files in array form */
      const files = Array.from(e.target.files);
      const arrFile = files.map(url => URL.createObjectURL(url))
      setImageArray([...imageArray, ...arrFile]);
    }
  }

  const handleDeleteListImage = (image) => {
    const newArrImage = [...imageArray].filter(images => images !== image);
    setImageArray(newArrImage);
  }

  return (
            <Grid container >

              <Box component="form" fullWidth noValidate onSubmit={handleSubmit} >
                <Grid container >
                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      label="Tên Sản Phẩm"
                      name="name"
                      autoComplete="name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <TextField
                      required
                      fullWidth
                      type="number"
                      id="name"
                      label="Giá Sản Phẩm"
                      name="price"
                      autoComplete="name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <InputLabel id="category">Danh Mục</InputLabel>
                    <Select
                      fullWidth
                      labelId="category"
                      id="demo-simple-select"
                      value={10}
                      label="category"
                    >
                      <MenuItem value={10}>Áo Thun</MenuItem>
                      <MenuItem value={11}>Quần Jean</MenuItem>
                      <MenuItem value={12}>LapTop</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <InputLabel id="brand">Thưởng Hiệu</InputLabel>
                    <Select
                      fullWidth
                      labelId="brand"
                      id="demo-simple-select"
                      value={10}
                      label="brand"
                    >
                      <MenuItem value={10}>Sam Sung</MenuItem>
                      <MenuItem value={11}>Nokia</MenuItem>
                      <MenuItem value={12}>Oppo</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Thuộc Tính Sản Phẩm
                    </Typography>

                    {
                      [...addFieldAttribute].map((index) => <FieldAttribute key={index.toString()} />)
                    }


                    <Grid item xs={12}>
                      <Button
                        onClick={hanldeAddFieldAttribute}
                        variant="contained"
                        size="small"
                      >
                        Thêm Thuộc Tính
                      </Button>
                    </Grid>

                  </Grid>



                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <InputLabel id="discount">Giảm Giá</InputLabel>
                    <Select
                      fullWidth
                      labelId="discount"
                      id="demo-simple-select"
                      value={10}
                      label="discount"
                    >
                      <MenuItem value={10}>10%</MenuItem>
                      <MenuItem value={11}>20%</MenuItem>
                      <MenuItem value={12}>30%</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} sx={{ pr: 4, pb: 4 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Mô Tả Sản Phẩm
                    </Typography>
                    <TextAreaFroala />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Ảnh Đại Diện
                    </Typography>

                    <InputFileAvatarMain />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
                    <label htmlFor="contained-button-file">
                      <input
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={hanldeUploadMultipleIamge}
                      />
                      <Button
                        variant="contained"
                        component="span"
                      >
                        Thêm hình ảnh
                      </Button>
                    </label>

                    <Grid container >
                      {
                        imageArray.length > 0 &&
                        [...imageArray].map((item, index) => <UploadAndDeleteFile key={index.toString()} urlImage={item} handleDeleteListImage={handleDeleteListImage} />)
                      }
                    </Grid>

                  </Grid>

                </Grid >

                <Grid item xs={12} sm={12} md={12} display="flex" justifyContent="flex-end">
                <FormControlLabel control={<Checkbox defaultChecked />} label="Ẩn Sản Phẩm" />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Chỉnh Sửa Sản Phẩm
                  </Button>
                </Grid>
              </Box>
            </Grid>
  );
}