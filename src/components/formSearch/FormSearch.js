import { useFormik } from "formik";
import { Input, Button, Select, Center, Flex } from "@chakra-ui/react";

export const FormSearch = ({pageNumber,
  setPageNumber,
  setName,
  setStatus,
  setGender,
  setSpecies}) => {
    const formik = useFormik({
        initialValues: {
          nombre: '',
          status: '',
          gender: '',
          specie: ''
        },
        onSubmit: (values) => {
          console.log(values);
          setName(values.nombre);
          setStatus(values.status);
          setGender(values.gender);
          setSpecies(values.specie);
          setPageNumber(1);
        },
        onReset:() => {
          setName('');
          setStatus('');
          setGender('');
          setSpecies('');
          setPageNumber(1);
        },
    });

    const status = ["Alive", "Dead", "Unknown"];
    const genders = ["female", "male", "genderless", "unknown"];
    const species = [
      "Human",
      "Alien",
      "Humanoid",
      "Poopybutthole",
      "Mythological",
      "Unknown",
      "Animal",
      "Disease",
      "Robot",
      "Cronenberg",
    ];

  return (
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Flex>
          <Center w='100%' h='50px'>
            <label>Personaje</label>
            <Input
              id='nombre'
              name='nombre'
              type='text'
              placeholder="Nombre del personaje"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
          </Center>
          <Center w='100%' h='50px'>
            <label>Estatus</label>
            <Select name="status" id="status" onChange={formik.handleChange}>
              <option value="">Seleccione Estatus</option>
              {status.map((item, index) => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </Center>
          <Center w='100%' h='50px'>
            <label>G&eacute;nero</label>
            <Select name="gender" id="gender" onChange={formik.handleChange}>
              <option value="">Seleccione g&eacute;nero</option>
              {genders.map((item, index) => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </Center>
          <Center w='100%' h='50px'>
            <label>Especie</label>
            <Select name="specie" id="specie" onChange={formik.handleChange}>
              <option value="">Seleccione Especie</option>
              {species.map((item, index) => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </Center>
          <Center w='100%' h='50px'>
            <Button type='submit'>Buscar</Button>
            <Button type="reset" onClick={formik.handleReset}>Limpiar</Button>
          </Center>
        </Flex>
      </form>
  )
}
