import { Vector2 } from "three";
import { useTexture, shaderMaterial } from "@react-three/drei";

// Vertex shader program
const vsSource = `
void main() {
    gl_Position = vec4( position, 1.0 );
}
`;

// Fragment shader program
const fsSource = `
// BASE
uniform vec2 u_resolution;
uniform float u_time;
// PLAYGROUND
// GRILL
uniform float u_grill;

// GENERAL
uniform float u_general_speed_x;
uniform float u_general_speed_y;

// CELL
uniform bool u_field_show_color;
uniform float u_field_r;
uniform float u_field_g;
uniform float u_field_b;

vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    vec2 vel = vec2(-u_general_speed_x,-u_general_speed_y) * u_time/10.;
    st += vel;
    vec3 color = vec3(.0);

    // Scale
    st *= u_grill;

    // Tile the space
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    float m_dist = 10.;  // minimum distance
    vec2 m_point;        // minimum point

    for (int j=-1; j<=1; j++ ) {
        for (int i=-1; i<=1; i++ ) {
            vec2 neighbor = vec2(float(i),float(j));
            vec2 point = random2(i_st + neighbor);
            point = 0.5 + 0.5*sin(u_time + 6.2831*point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);

            if( dist < m_dist ) {
                m_dist = dist;
                m_point = point;
            }
        }
    }

    // Add distance field to closest point center
    if (u_field_show_color) {
        color.r += m_dist * u_field_r;
        color.g += m_dist * u_field_g;
        color.b += m_dist * u_field_b;
    }

    gl_FragColor = vec4(color,1.0);
}
`;

const CellularNoiseMaterial = shaderMaterial(
  {
    u_time: 1.0,
    u_resolution: undefined,
    u_grill: 10.0,
    u_general_speed_x: 0,
    u_general_speed_y: 0,
    u_field_show_color: true,
    u_field_r: 1,
    u_field_g: 1,
    u_field_b: 1,
  },
  vsSource,
  fsSource
);

export default CellularNoiseMaterial;
