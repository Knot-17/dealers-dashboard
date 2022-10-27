import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";

import { useForm } from "react-hook-form";

import Highlighter from "react-highlight-words";

import Swal from "sweetalert2";
import {
  MainContainer,
  ReceiptContainer,
  ReceiptHeader,
  ReceiptBody,
  ReceiptFooter,
  InputContainerDouble,
  InputBox,
  Label,
  InputContainerFull,
  Heading,
  ButtonContainer,
  ButtonElementEdit,
  ButtonElement,
} from "../components/styled/UpdateEventsElements";

const UpdateEvents = () => {
  const { register, handleSubmit } = useForm();

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [id, setId] = useState(0);

  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const del = (record) => {
    axios
      .delete(`http://localhost:5000/api/v1/getUser/${record.id}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "User Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        setUsers(users.filter((user) => user.id !== record.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const edit = (record) => {
    setId(record.id);
    setFormData(record);
  };

  const update = (data) => {
    console.log({ ...data, id: id });
    axios
      .put(`http://localhost:5000/api/v1/getUser/${id}`, { ...data, id: id })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "User Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        setUsers([...users.filter((user) => user.id !== id), res.data]);
        setId(0);
      });
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              backgroundColor: "#1E90FF",
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(
        `http://localhost:5000/api/v1/addQuote/dealer/${localStorage.getItem(
          "dealerID"
        )}`
      )
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("firstname"),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "View",
      key: "view",
      render: (item, record) => (
        <Space size="middle">
          <ButtonElement
            onClick={(e) => {
              e.preventDefault();
              edit(item);
            }}
          >
            View
          </ButtonElement>
        </Space>
      ),
    },
    {
      title: "Delete",
      key: "Delete",
      render: (item, record) => (
        <Space size="middle">
          <ButtonElementEdit
            onClick={(e) => {
              e.preventDefault();
              del(item);
            }}
          >
            Delete
          </ButtonElementEdit>
        </Space>
      ),
    },
  ];
  return (
    <div className="mr-4 mt-4">
      <MainContainer>
        <Table columns={columns} dataSource={users} />
        {id != 0 ? (
          <ReceiptContainer>
            <ReceiptHeader>
              {" "}
              <Heading>
                {" "}
                Request quotation by {formData.firstname}{" "}
              </Heading>{" "}
            </ReceiptHeader>
            <ReceiptBody>
              <InputContainerDouble>
                <InputBox>
                  <PersonIcon />
                  <Label> {formData.firstname} </Label>
                </InputBox>
                <InputBox>
                  <PersonIcon />
                  <Label> {formData.lastname} </Label>
                </InputBox>
              </InputContainerDouble>
              <InputContainerFull>
                <InputBox>
                  <Label>{formData.email}</Label>
                </InputBox>
              </InputContainerFull>
              <InputContainerFull>
                <InputBox>
                  <Label>{formData.weddingdate}</Label>
                </InputBox>
              </InputContainerFull>
              <InputContainerFull>
                <InputBox>
                  <Label>{formData.guestcount}</Label>
                </InputBox>
              </InputContainerFull>
              <InputContainerFull>
                <InputBox>
                  <Label>{formData.weddingvenue}</Label>
                </InputBox>
              </InputContainerFull>
              <InputContainerFull>
                <InputBox>
                  <Label>{formData.weddingdescription}</Label>
                </InputBox>
              </InputContainerFull>
            </ReceiptBody>
            <ReceiptFooter>
              <ButtonContainer>
                <ButtonElementEdit
                  onClick={(e) => {
                    e.preventDefault();
                    setId(0);
                  }}
                >
                  {" "}
                  Cancel{" "}
                </ButtonElementEdit>
                <ButtonElement>Contact</ButtonElement>
              </ButtonContainer>
            </ReceiptFooter>
          </ReceiptContainer>
        ) : null}
      </MainContainer>
    </div>
  );
};

export default UpdateEvents;
