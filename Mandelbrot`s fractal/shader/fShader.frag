#version 330

in vec4 gl_FragCoord; 
out vec4 color;
 
#define MAX_ITERATIONS 15
#define THRESHOLD 4.0
 
int get_iterations()
{
    float real = (gl_FragCoord.x / 1080.0 - 0.7) * 2.7; // you may rewrite that for your width and height
    float imag = (gl_FragCoord.y / 1080.0 - 0.63) * 2.7; // -==-
 
    int iterations = 0;
    float const_real = real;
    float const_imag = imag;
 
    for( ; iterations < MAX_ITERATIONS; ++iterations)
    {
        float tmp_real = real;
        real = (real * real - imag * imag) + const_real;
        imag = (2.0 * tmp_real * imag) + const_imag;
         
        if (real * real + imag * imag > THRESHOLD)
        break;
    }
    return iterations;
}

vec4 GetColor()
{
    int count_of_iter = get_iterations();
    if (count_of_iter == MAX_ITERATIONS)
    {
        gl_FragDepth = 0.3f;
        return vec4(0.0f, 0.0f, 0.0f, 1.0f);
    }
 
    float iterations = float(count_of_iter) / MAX_ITERATIONS;
    return vec4(0.0f, sin(iterations), cos(iterations), 1.0f);
}
 
void main()
{
    color = GetColor();
}
