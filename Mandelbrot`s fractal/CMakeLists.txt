cmake_minimum_required(VERSION 3.11)
project(Mandelbrot_s-fractal)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14 -w")
include_directories(/usr/local/include ${GLFW_INCLUDE_DIR})

if (POLICY CMP0072)
	cmake_policy (SET CMP0072 NEW)
endif(POLICY CMP0072)

find_package(OpenGL REQUIRED)
find_package(glfw3 3.3 REQUIRED)
find_package(GLEW REQUIRED)

add_executable(${PROJECT_NAME} main.cpp shader.cpp)

target_link_libraries(${PROJECT_NAME} glfw OpenGL::GL GLEW::GLEW)