import React from "react";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { connect } from "react-redux";
import { Button } from 'antd'
import './UndoRedo.css'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p className="undoRedo_container">
    <Button className="undoRedo_btn" onClick={onUndo} disabled={!canUndo}>
      Undo
    </Button>
    <Button className="undoRedo_btn" onClick={onRedo} disabled={!canRedo}>
      Redo
    </Button>
  </p>
);

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0,
});

const mapDispatchToProps = {
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
};

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

export default UndoRedo;
