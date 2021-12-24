import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import { Link } from 'react-router-dom';
// validate
import { productSchema } from "validates/adminValidate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputFileAvatarMain from "./InputFileAvatarMain";
import UploadAndDeleteFile from "./UploadAndDeleteFile";
import DescriptionAddForm from "./DescriptionAddForm";

import FieldAttribute from "./FieldAttribute";


FormAddProduct.propTypes = {
  categories: PropTypes.array,
  brands: PropTypes.array,
}
FormAddProduct.defaultProps = {
  categories: [],
  brands: [],
}

export default function FormAddProduct(props) {
  /*****props****/
  const { categories, brands } = props;
  /*****state****/
  const [product, setProduct] = useState({
    listimg: [],
  });

  //validate
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    shouldUnregister: true,
    defaultValues: {
      name: '',
      price: 0,
      discount: 0,
      cate_id: 0,
      brand_id: 0,
      shortdescription: '',
      hide: false,
    }
  });

  const onLoginSubmit = (data) => {
    if (data.hide === "false") {
      data.hide = 0;
    } else {
      data.hide = 1;
    }

    const newData = {
      ...product,
      ...data,
    }
    console.log('newData',newData);
    props.handleAddProduct(newData);
  };

  /*********handle upload multipe image*********/
  const hanldeUploadMultipleIamge = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      const promises = files.map(file => {
        return (new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener('load', (ev) => {
            resolve(ev.target.result);
          });
          reader.addEventListener('error', reject);
          reader.readAsDataURL(file);
        }))
      });

      Promise.all(promises).then(images => {
        setProduct({
          ...product,
          listimg: [...product.listimg, ...images],
        })
      }, error => { console.error(error); });
    }
  }

  /*********handle delete image*********/
  const handleDeleteListImage = (image) => {
    const newArrImage = [...product.listimg].filter(images => images !== image);
    setProduct({
      ...product,
      listimg: newArrImage,
    })
  }
  /*********handle change description*********/
  const handleOnChangeDescription = (text) => {
    setProduct({
      ...product,
      description: text,
    })
  }
  /**********handle avatar file*************/
  const handleChangeAvatar = (img) => {
    setProduct({
      ...product,
      img: img,
    })
  }
  /**********handle change input type checkbox ,avatar file Single*************/
  const handleInputChange = (event) => {
    const target = event.target;
    let value;
    const name = target.name;
    if (target.type === 'file') {
      console.log('file');
      let fileAvatar = target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        setProduct({
          ...product,
          [name]: e.target.result
        });
      };
      reader.readAsDataURL(fileAvatar);
      return;

    } else if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }

    console.log('value', value, name);

    setProduct({
      ...product,
      [name]: value
    });
  }
  /**********handle change attributes *************/
  const handleChangeAttributes = (event) => {
    const target = event.target;
    let value = target.value;;
    const name = target.name;
    const arrName = name.split('.');

    const newAttribute = [...product.attributes].map((item, index) => {
      if (index == arrName[1]) {
        item[`${arrName[2]}`] = value;
      }
      return item;
    })

    setProduct({
      ...product,
      attributes: newAttribute
    });
  }
  /*********handle add field atribute*********/
  const hanldeAddFieldAttribute = () => {
    const defaultValue = {
      quantity: 1,
      name: '',
    };
    if (product.hasOwnProperty('attributes')) {
      setProduct({
        ...product,
        attributes: [...product.attributes, defaultValue]
      });
    } else {
      setProduct({
        ...product,
        attributes: [defaultValue]
      });
    }

  }
  /*********handle delete field atribute*********/
  const hanldeDeleteFieldAttribute = (index) => () => {
    // get values
    const { attributes } = getValues();
    console.log('attributes', attributes);
    // create a copy
    let newAtribute = attributes;
    console.log('newAtribute', newAtribute);

    if (newAtribute.length > 1) {
      // remove by index
      newAtribute.splice(index, 1);
    } else {
      newAtribute = [];
    }

    // update values
    setProduct({
      ...product,
      attributes: newAtribute,
    });

    for (let i = 0; i < newAtribute.length; i++) {
      setValue(`attributes[${i}].name`, newAtribute[i].name);
      setValue(`attributes[${i}].quantity`, newAtribute[i].quantity);
    }
  };

  return (
    <Box component="form" fullWidth noValidate onSubmit={handleSubmit(onLoginSubmit)} >
      <Grid container >
        <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
          <TextField
            fullWidth
            label="Tên Sản Phẩm"
            name="name"
            autoComplete="name"
            {...register("name")}
            helperText={errors.name && `${errors.name?.message}`}
            error={errors.name && true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
          <TextField
            fullWidth
            type="number"
            label="Giá Sản Phẩm"
            name="price"
            {...register("price")}
            helperText={errors.price && `${errors.price?.message}`}
            error={errors.price && true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
          <InputLabel id="cate_id">Danh Mục</InputLabel>
          <Select
            fullWidth
            labelId="cate_id"
            id="demo-simple-select"
            label="cate_id"
            name="cate_id"
            defaultValue={0}
            {...register("cate_id")}
            error={errors.cate_id && true}
          >
            <MenuItem value={'0'}>Chọn danh mục</MenuItem>
            {
              [...categories].length > 0 ?
                [...categories].map(item => {
                  return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                })
                : <MenuItem value={''}></MenuItem>
            }
          </Select>
          {errors.cate_id && <p style={{ color: 'red', fontSize: '12px', marginLeft: '15px' }}>{errors.cate_id?.message}</p>}
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
          <InputLabel id="brand_id">Thương Hiệu</InputLabel>
          <Select
            fullWidth
            labelId="brand_id"
            id="demo-simple-select"
            label="brand_id"
            name="brand_id"
            defaultValue={0}
            {...register("brand_id")}
            error={errors.brand_id && true}
          >
            <MenuItem value={0}>Chọn thương hiệu</MenuItem>
            {
              [...brands].length > 0 ?
                [...brands].map(item => {
                  return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                })
                : <MenuItem value={''}></MenuItem>
            }
          </Select>
          {errors.brand_id && <p style={{ color: 'red', fontSize: '12px', marginLeft: '15px' }}>{errors.brand_id?.message}</p>}
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
          <Typography variant="h6" gutterBottom component="div">
            Thuộc Tính Sản Phẩm
          </Typography>

          <FieldAttribute
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            handleChangeAttributes={handleChangeAttributes}
            hanldeAddFieldAttribute={hanldeAddFieldAttribute}
            hanldeDeleteFieldAttribute={hanldeDeleteFieldAttribute}
            editAttributes={product.hasOwnProperty('attributes') ? product.attributes : []}
          />
        </Grid>



        <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
          <TextField
            fullWidth
            type="number"
            label="Giảm giá (%)"
            name="discount"
            {...register("discount")}
            helperText={errors.discount && `${errors.discount?.message}`}
            error={errors.discount && true}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} sx={{ pr: 4, pb: 4 }}>
          <Typography variant="h6" gutterBottom component="div">
            Mô Tả Ngắn
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            fullWidth
            multiline
            rows={4}
            name="shortdescription"
            placeholder="mô tả ngắn"
            {...register("shortdescription")}
            helperText={errors.discount && `${errors.discount?.message}`}
            error={errors.discount && true}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} sx={{ pr: 4, pb: 4 }}>
          <Typography variant="h6" gutterBottom component="div">
            Mô Tả Sản Phẩm
          </Typography>
          <DescriptionAddForm handleOnChangeDescription={handleOnChangeDescription} />
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{ pr: 4, pb: 4 }}>
          <Typography variant="h6" gutterBottom component="div">
            Ảnh Đại Diện
          </Typography>

          <InputFileAvatarMain
            handleChangeAvatar={handleChangeAvatar}
            handleInputChange={handleInputChange}
            avatar={product.hasOwnProperty('img') ? product.img : null}
          />
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
              product.hasOwnProperty('listimg') ?
                [...product.listimg].map((item, index) => <UploadAndDeleteFile key={index.toString()} urlImage={item} handleDeleteListImage={handleDeleteListImage} />)
                : ""
            }
          </Grid>

        </Grid>

      </Grid >

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <FormControlLabel control={
          <Checkbox
            {...register("hide")}
          />
        }
          label="Ẩn"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <Link to="/seller/product">
            <Button type="submit" color="secondary" variant="contained">Danh sách sản phẩm</Button>
          </Link>
          <Button type="submit" sx={{ margin: "0 20px" }} variant="contained">Thêm</Button>
        </Box>
      </Box>

    </Box>

  );
}
