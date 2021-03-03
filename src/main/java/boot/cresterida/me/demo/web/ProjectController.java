package boot.cresterida.me.demo.web;

import boot.cresterida.me.demo.domain.Project;
import boot.cresterida.me.demo.exceptions.ProjectIdException;
import boot.cresterida.me.demo.services.ProjectService;
import boot.cresterida.me.demo.utils.GenericResponse;
import boot.cresterida.me.demo.utils.UtilRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600,allowedHeaders = "*",allowCredentials = "true")
@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(UtilRequest.obtainError(bindingResult), HttpStatus.BAD_REQUEST);
        }
        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(project1, HttpStatus.CREATED);

    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> obtainProjectId(@PathVariable String projectId) {
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);

    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProjects() {
        return new ResponseEntity<>(projectService.getAllProjects(), HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable  String projectId) {
        projectService.deleteProject(projectId);
        return new ResponseEntity<>(new GenericResponse("Deleted project"),HttpStatus.OK);

    }

}
