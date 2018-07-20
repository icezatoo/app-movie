// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import CircularLoader from '../../../../common/components/loader/CircularLoader';
import { compose, branch, renderComponent, setPropTypes } from 'recompose';

const Modal = styled.div`
  display: ${props => (props.showdialog ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #0e0d0d;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 0px solid;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    width: 55%;
  }
  @media only screen and (min-width: 992px) {
    width: 55%;
  }
  @media only screen and (min-width: 1200px) {
    width: 55%;
  }
  @media only screen and (min-width: 1900px) {
    width: 40%;
  }
`;

const ModalClose = styled.span`
  color: #fffefe;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #fffefe;
    text-decoration: none;
    cursor: pointer;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DialogVideo = props => {
  const { showdialog, _dialogClose, videodata } = props;
  const pathvideo = 'https://www.youtube.com/watch?v=' + videodata.key;
  return (
    <Modal showdialog={showdialog}>
      {showdialog && (
        <ModalContent>
          <div>
            <ModalClose onClick={_dialogClose}>&times;</ModalClose>
          </div>
          <VideoContainer>
            <ReactPlayer url={pathvideo} playing controls />
          </VideoContainer>
        </ModalContent>
      )}
    </Modal>
  );
};

const withPropTypes = setPropTypes({
  showdialog: PropTypes.bool.isRequired,
  _dialogClose: PropTypes.func.isRequired,
  videodata: PropTypes.object.isRequired
});

const spinnerWhileLoading = isLoading =>
  branch(isLoading, renderComponent(CircularLoader));

const enhance = spinnerWhileLoading(props => !props.videodata);

export default compose(
  withPropTypes,
  enhance
)(DialogVideo);
