import React, { useState, useEffect } from 'react';
import { FaSpinner, FaHashtag } from 'react-icons/fa';
import {
  MdCancel,
  MdLibraryAdd,
  MdInsertLink,
  MdDescription,
  MdAssignment,
  MdDelete,
} from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import {
  Container,
  ToolList,
  Options,
  ModalBody,
  Modal,
  Loading,
} from './styles';

import ActionConfirm from '../../components/ActionConfirm';

import api from '../../services/api';

const schema = Yup.object().shape({
  title: Yup.string('Insert Tool title').required('Tool title is required'),
  link: Yup.string('Link from website tool').required('Link is required'),
  description: Yup.string('Min 10 characters').required(
    'Description is required'
  ),
  tags: Yup.string(),
});

export default function Main() {
  const [tools, setTools] = useState([]);
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(false);
  const [toolIndex, settoolIndex] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTools() {
      setLoading(true);
      const response = await api.get('/tools');

      const data = response.data.map(tool => ({
        ...tool,
        tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
      }));

      setTools(data);
      setLoading(false);
    }
    getTools();
  }, []);

  async function handleSubmit({ title, link, description, tags }) {
    try {
      await api.post('/tools', {
        title,
        link,
        description,
        tags: tags.split(' '),
      });

      const newToolState = await api.get('tools');

      const data = newToolState.data.map(tool => ({
        ...tool,
        tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
      }));

      setTools(data);
      toast.success('New tool registered');
      setModal(false);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function handleDeleteTool(id) {
    try {
      await api.delete(`/tools/${id}`);
      toast.success('Tool has been deleted');

      const updatedTools = tools.filter(tool => tool._id !== id);

      setTools(updatedTools);
      setAction(false);
      settoolIndex(null);
    } catch (err) {
      toast.error('Error at delete tool');
    }
  }

  async function handleSearch(e) {
    const search = e.target.value;
    setInputValue(search);

    const searchByTagInput = document.getElementById('tag');

    if (searchByTagInput.checked) {
      const searchTools = await api.get(`/tools?tag=${search}`);

      const data = searchTools.data.map(tool => ({
        ...tool,
        tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
      }));

      setTools(data);
    }

    if (!searchByTagInput.checked) {
      const searchTools = await api.get(`/tools`);

      const data = searchTools.data.filter(tool => tool.title === search);

      const FormattedTools = data.map(tool => ({
        ...tool,
        tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
      }));

      setTools(FormattedTools);

      if (search === '') {
        const DefaultTools = searchTools.data.map(tool => ({
          ...tool,
          tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
        }));
        setTools(DefaultTools);
      }
    }
  }

  return (
    <>
      <Container>
        <Options>
          <div>
            <div>
              <input
                value={inputValue}
                onChange={handleSearch}
                placeholder="Search"
                type="search"
              />
              <input id="tag" type="checkbox" />
              <p>search in tags only</p>
            </div>
            <button onClick={() => setModal(true)} type="button">
              Add
            </button>
          </div>
        </Options>
        <ToolList>
          {loading && (
            <Loading loading={String(loading)}>
              <span>
                <FaSpinner size={40} color="#000" />
              </span>
            </Loading>
          )}
          {tools.map((tool, index) => (
            <li key={tool._id}>
              <div>
                <a href={tool.link}>{tool.title}</a>
                <p>{tool.description}</p>
                <span>{tool.tagsFormatted}</span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setAction(true);
                    settoolIndex(index);
                  }}
                >
                  <MdDelete size={20} color="#00AA9E" />
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ToolList>
      </Container>
      <ModalBody visible={modal}>
        <Modal visibleEffect={modal}>
          <button type="button" onClick={() => setModal(false)}>
            <MdCancel size={25} color="#f00" />
          </button>
          <h1>
            <MdLibraryAdd size={20} color="#000" /> Add new Tool
          </h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            <label htmlFor="">
              <MdAssignment size={20} color="#000" />
              Tool Name *
            </label>
            <Input name="title" placeholder="Tool Title" />
            <label htmlFor="">
              <MdInsertLink size={20} color="#000" /> Tool link *
            </label>
            <Input name="link" placeholder="Webpage link" />
            <label htmlFor="">
              <MdDescription size={20} color="#000" /> Tool description *
            </label>
            <Input name="description" placeholder="10 characters minimum" />
            <label htmlFor="">
              <FaHashtag size={15} color="#000" />
              Tags
            </label>
            <Input
              name="tags"
              placeholder="Separated by spaces: node express ..."
            />
            <div>
              <button type="submit">Add tool</button>
            </div>
          </Form>
        </Modal>
      </ModalBody>
      {action && (
        <ActionConfirm>
          <h1>
            <MdDelete size={40} color="#00AA9E" /> Remove tool
          </h1>
          <p>Are you sure you want to remove this tool?</p>
          <div>
            <button type="button" onClick={() => setAction(false)}>
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleDeleteTool(tools[toolIndex]._id)}
            >
              Yes, Delete
            </button>
          </div>
        </ActionConfirm>
      )}
    </>
  );
}
