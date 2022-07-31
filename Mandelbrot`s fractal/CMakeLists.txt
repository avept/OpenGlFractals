# did not work, you may include dependencies on your own

cmake_minimum_required(VERSION 3.11)
project(Mandelbrot`s_fractal)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14 -w")
include_directories(/usr/local/include ${GLFW_INCLUDE_DIR})

find_package(OpenGL REQUIRED)

add_executable(main.cpp shader.cpp)
