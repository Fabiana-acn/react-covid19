import React, { useEffect, useState } from 'react';
import { Form, Select } from 'antd';
import axios from 'axios';
import { endpoint } from '../common/constantes';
import { useHistory } from 'react-router';

const Home = () => {
  const [form] = Form.useForm();
  const [loading, setloading] = useState(false);
  const [paises, setPaises] = useState([]);
  const history = useHistory();

  async function getPaises() {
    setloading(true);
    const res = await axios.get(`${endpoint}/cases`);
    if (res.status === 200) {
      console.log(res.data);
      setPaises(Object.keys(res.data));
    }
    setloading(false);
  }
  function selecionarPais() {
    form.validateFields().then((values) => {
      console.log(values);
      history.push(`/${values.pais}/cases`);
    });
  }

  useEffect(() => {
    getPaises();
  }, []);

  return (
    <div>
      <Form form={form}>
        <Form.Item
          name="pais"
          rules={[{ required: true, message: 'Campo Obrigatório' }]}
        >
          <Select
            onChange={selecionarPais}
            placeholder="Selecione o País"
            loading={loading}
          >
            <Select.Option></Select.Option>
            {paises.map((pais) => (
              <Select.Option key={pais} value={pais}>
                {pais}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Home;
