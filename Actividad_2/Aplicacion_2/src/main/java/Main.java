/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author LENOVO
 */import javax.swing.SwingUtilities;
import javax.swing.JFrame;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Main {
     public static void main(String[] args) {
         JFrame frame = new JFrame("Aplicación 1");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      frame.setContentPane(new App()); 
        frame.pack();
        frame.setLocationRelativeTo(null); 
        frame.setVisible(true); 
     }
}
