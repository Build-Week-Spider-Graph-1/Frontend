// import act from 'states/act'

/***************************************
  MAIN
***************************************/

/*******************
  basics - client
*******************/

export const ADD_GRAPH   = 'ADD_GRAPH'
export const EDIT_GRAPH  = 'EDIT_GRAPH'
export const RESET_GRAPH = 'RESET_GRAPH'

export const EDIT_GRAPH_TITLE  = 'EDIT_GRAPH_TITLE'
export const EDIT_GRAPH_THEME  = 'EDIT_GRAPH_THEME'
export const EDIT_GRAPH_SCALE  = 'EDIT_GRAPH_SCALE'

export const ADD_GRAPH_ARM    = 'ADD_GRAPH_ARM'
export const EDIT_GRAPH_ARM   = 'EDIT_GRAPH_ARM'
export const DELETE_GRAPH_ARM = 'ADD_GRAPH_ARM'

export const ADD_GRAPH_DATASET    = 'ADD_GRAPH_DATASET'
export const EDIT_GRAPH_DATASET   = 'EDIT_GRAPH_DATASET'
export const DELETE_GRAPH_DATASET = 'ADD_GRAPH_DATASET'

export const REORDER_GRAPH_ARMS   = 'REORDER_GRAPH_ARMS'
export const REORDER_GRAPH_DATASETS   = 'REORDER_GRAPH_DATASETS'

/*******************
  basics - server
*******************/

/// USER AUTH ///

export const SIGN_UP_TRY     = 'SIGN_UP_TRY'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const SIGN_IN_TRY     = 'SIGN_IN_TRY'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'

export const SIGN_OUT_TRY     = 'SIGN_OUT_TRY'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'

/// ALL USERS -- stretch ///

export const GET_USERS_TRY     = 'GET_USERS_TRY'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

/// USER ///

export const GET_USER_TRY     = 'GET_USER_TRY'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export const GET_USER_GRAPHS_TRY     = 'GET_USER_GRAPHS_TRY'
export const GET_USER_GRAPHS_SUCCESS = 'GET_USER_GRAPHS_SUCCESS'
export const GET_USER_GRAPHS_FAILURE = 'GET_USER_GRAPHS_FAILURE'

/// ALL GRAPHS -- stretch ///

export const GET_GRAPHS_TRY     = 'GET_GRAPHS_TRY'
export const GET_GRAPHS_SUCCESS = 'GET_GRAPHS_SUCCESS'
export const GET_GRAPHS_FAILURE = 'GET_GRAPHS_FAILURE'

/// GRAPH ///

export const POST_GRAPH_TRY     = 'POST_GRAPH_TRY'
export const POST_GRAPH_SUCCESS = 'POST_GRAPH_SUCCESS'
export const POST_GRAPH_FAILURE = 'POST_GRAPH_FAILURE'

export const GET_GRAPH_TRY     = 'GET_GRAPH_TRY'
export const GET_GRAPH_SUCCESS = 'GET_GRAPH_SUCCESS'
export const GET_GRAPH_FAILURE = 'GET_GRAPH_FAILURE'

export const PUT_GRAPH_TRY     = 'PUT_GRAPH_TRY'
export const PUT_GRAPH_SUCCESS = 'PUT_GRAPH_SUCCESS'
export const PUT_GRAPH_FAILURE = 'PUT_GRAPH_FAILURE'

export const DELETE_GRAPH_TRY     = 'DELETE_GRAPH_TRY'
export const DELETE_GRAPH_SUCCESS = 'DELETE_GRAPH_SUCCESS'
export const DELETE_GRAPH_FAILURE = 'DELETE_GRAPH_FAILURE'

/*******************
  composites
*******************/

export const SIGN_UP         = 'SIGN_UP'
export const SIGN_IN         = 'SIGN_IN'
export const SIGN_OUT        = 'SIGN_OUT'
export const GET_USERS       = 'GET_USERS'
export const GET_USER        = 'GET_USER'
export const GET_USER_GRAPHS = 'GET_USER_GRAPHS'
export const GET_GRAPHS      = 'GET_GRAPHS'
export const POST_GRAPH      = 'POST_GRAPH'
export const GET_GRAPH       = 'GET_GRAPH'
export const PUT_GRAPH       = 'PUT_GRAPH'
export const DELETE_GRAPH    = 'DELETE_GRAPH'

/**************************************/

export default {
  basics : {
    /// client ///
    ADD_GRAPH,
    EDIT_GRAPH,
    RESET_GRAPH,
    EDIT_GRAPH_TITLE,
    EDIT_GRAPH_THEME,
    EDIT_GRAPH_SCALE,
    ADD_GRAPH_ARM,
    EDIT_GRAPH_ARM,
    DELETE_GRAPH_ARM,
    ADD_GRAPH_DATASET,
    EDIT_GRAPH_DATASET,
    DELETE_GRAPH_DATASET,
    REORDER_GRAPH_ARMS,
    REORDER_GRAPH_DATASETS,
    /// server ///
    SIGN_UP_TRY,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_IN_TRY,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_TRY,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    GET_USERS_TRY,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USER_TRY,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_GRAPHS_TRY,
    GET_USER_GRAPHS_SUCCESS,
    GET_USER_GRAPHS_FAILURE,
    GET_GRAPHS_TRY,
    GET_GRAPHS_SUCCESS,
    GET_GRAPHS_FAILURE,
    POST_GRAPH_TRY,
    POST_GRAPH_SUCCESS,
    POST_GRAPH_FAILURE,
    GET_GRAPH_TRY,
    GET_GRAPH_SUCCESS,
    GET_GRAPH_FAILURE,
    PUT_GRAPH_TRY,
    PUT_GRAPH_SUCCESS,
    PUT_GRAPH_FAILURE,
    DELETE_GRAPH_TRY,
    DELETE_GRAPH_SUCCESS,
    DELETE_GRAPH_FAILURE,
  },
  composites : {
    SIGN_UP,
    SIGN_IN,
    SIGN_OUT,
    GET_USERS,
    GET_USER,
    GET_USER_GRAPHS,
    GET_GRAPHS,
    POST_GRAPH,
    GET_GRAPH,
    PUT_GRAPH,
    DELETE_GRAPH,
  },
}